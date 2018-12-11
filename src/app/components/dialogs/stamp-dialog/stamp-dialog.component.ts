import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployeesService } from 'src/app/services/employees.service';
import { StampsService } from 'src/app/services/stamps.service';

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
    console.log(this.dni);
    this.employeeService.findByDni(this.dni).subscribe(
      employee => this.stampService.saveStamp(employee._id),
      () => console.log('error buscando empleado con ese dni')
    );
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
