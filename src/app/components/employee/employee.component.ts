import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeDialogComponent } from '../dialogs/employee-dialog/employee-dialog.component';
import { Employee } from 'src/app/models/employee';


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
