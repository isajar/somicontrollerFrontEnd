import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stamp-dialog',
  templateUrl: './stamp-dialog.component.html',
  styleUrls: ['./stamp-dialog.component.css']
})
export class StampDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StampDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dni: string
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
