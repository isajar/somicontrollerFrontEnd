import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployeesService } from 'src/app/services/employees.service';
import { StampsService } from 'src/app/services/stamps.service';
import { concatMap, isEmpty, map } from 'rxjs/operators';
import { noop } from 'rxjs';

@Component({
  selector: 'app-stamp-dialog',
  templateUrl: './stamp-dialog.component.html',
  styleUrls: ['./stamp-dialog.component.css']
})
export class StampDialogComponent implements OnInit {

  dni = '';

  constructor(
    public dialogRef: MatDialogRef<StampDialogComponent>,
    private employeeService: EmployeesService,
    private stampService: StampsService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    const employee$ = this.employeeService.findByDni(this.dni);

    employee$.pipe(
      concatMap( employee => this.stampService.saveStamp(employee._id))
    ).subscribe(
      noop,
      error => console.error(error.message)
    );

    this.dialogRef.close();
  }


  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
