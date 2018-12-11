import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
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
    private employeeService: EmployeesService
    ) {
      // create an empty employee using the interface
      this.employee = <Employee>{};
      // create a form group via formBuilder
      this.form = formBuilder.group({
        name: [this.employee.name, Validators.required],
        dni: [this.employee.dni, Validators.required]
      });

  }

  ngOnInit() {
    //this.form.valueChanges.subscribe(console.log);
  }

  save() {
    console.log('form value: ', this.form.value);
    this.employeeService.postEmployee(this.form.value).subscribe(
      employee => console.log(employee),
      err => console.log(err.error)
    );
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
