import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  form: FormGroup;
  employee: Employee;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA) employee: Employee
    ) {
      this.employee = employee;
      // create a form group via formBuilder
      this.form = formBuilder.group({
        // _id, if it is a new employee will be undefined
        _id: [this.employee._id],
        name: [this.employee.name, Validators.required],
        dni: [this.employee.dni, Validators.required],
      });

  }

  ngOnInit() { }

  save() {
    console.log('form value: ', this.form.value);
    this.employee = this.form.value;

    this.employeeService.saveEmployee(this.employee).subscribe(
      employee => console.log(employee),
      err => console.log(err.error)
    );

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
