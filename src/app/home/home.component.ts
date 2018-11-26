import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StampDialogComponent } from '../stamp-dialog/stamp-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dni: string = '';

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StampDialogComponent, {
      width: '250px',
      data: this.dni
    });
  }

  ngOnInit() {

  }


}
