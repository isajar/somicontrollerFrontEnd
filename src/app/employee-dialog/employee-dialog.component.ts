import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Employee } from '../models/employee';
import { MatDialogRef } from '@angular/material';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  form: FormGroup;
  employee: Employee;

  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<EmployeeDialogComponent>,
               private employeeService: EmployeesService ) {
    // create an empty employee using the interface
    this.employee = <Employee>{};
    // create a form group via formBuilder
    this.form = formBuilder.group({
      name: [this.employee.name, Validators.required],
      dni: [this.employee.dni, Validators.required]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(console.log);
  }

  save() {
    console.log(this.form.value);
    // continue here -> this.employeeService.postEmployee(this.form.value);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
