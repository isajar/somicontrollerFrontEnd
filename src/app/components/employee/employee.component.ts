import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeDialogComponent } from '../dialogs/employee-dialog/employee-dialog.component';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSource = new EmployeeDataSource(this.employeesService);
  displayedColumns = ['name', 'dni', 'star'];



  constructor( private employeesService: EmployeesService,
               public dialog: MatDialog ) { }

  ngOnInit() {
  }

  create(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = <Employee>{};
    this.dialog.open(EmployeeDialogComponent, dialogConfig);
  }

  delete( employeeId: string ) {
    console.log(employeeId);
    this.employeesService.deleteEmployee( employeeId ).subscribe(
      employee => console.log('deleted employee: ', employee),
      error => console.log('error deleting employee: ', error.error)
     );
  }

  edit( employee: Employee ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = employee;
    this.dialog.open(EmployeeDialogComponent, dialogConfig);
  }



} // End of Class



export class EmployeeDataSource extends DataSource<any> {
  constructor(private employeesService: EmployeesService) {
    super();
  }
  connect(): Observable<Employee[]> {
    return this.employeesService.employees$;
  }
  disconnect() {}
}
