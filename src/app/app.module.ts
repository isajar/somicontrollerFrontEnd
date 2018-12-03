// ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// ROUTING
import {AppRoutingModule} from './app-routing.module';

// ANGULAR MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatTableModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  } from '@angular/material';


// COMPONENTS
import { HomeComponent } from './home/home.component';
import { StampDialogComponent } from './stamp-dialog/stamp-dialog.component';
import { ReportComponent } from './report/report.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StampDialogComponent,
    ReportComponent,
    EmployeeComponent,
    EmployeeDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StampDialogComponent, EmployeeDialogComponent]
})
export class AppModule { }
