import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSource = new EmployeeDataSource(this.employeeService);
  displayedColumns = ['name', 'dni'];

  constructor( private employeeService: EmployeesService,
               public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent);
  }

}



export class EmployeeDataSource extends DataSource<any> {
  constructor(private employeeService: EmployeesService) {
    super();
  }
  connect(): Observable<Employee[]> {
    return this.employeeService.employees$;
  }
  disconnect() {}
}
