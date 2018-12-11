import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from 'src/app/models/employee';
import { StampsService } from 'src/app/services/stamps.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { StampDialogComponent } from '../dialogs/stamp-dialog/stamp-dialog.component';
import { Stamp } from 'src/app/models/stamp';


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
