import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StampDialogComponent } from '../stamp-dialog/stamp-dialog.component';
import { Observable } from 'rxjs';
import { Stamp } from '../models/stamp';
import { StampsService } from '../services/stamps.service';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = new StampDataSource(this.stampService);
  displayedColumns = ['employee', 'workIn', 'workOut'];
  employee$: Observable<Employee>;


  constructor(public dialog: MatDialog,
              private stampService: StampsService,
              private employeeService: EmployeesService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StampDialogComponent);
  }

  ngOnInit() {
  }

  employee(id: string) {
   return this.employeeService.findById(id);
  }


}

export class StampDataSource extends DataSource<any> {
  constructor(private stampService: StampsService) {
    super();
  }
  connect(): Observable<Stamp[]> {
    return this.stampService.stamps$;
  }
  disconnect() {}
}
