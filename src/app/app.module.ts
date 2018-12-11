// ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// ROUTING
import {AppRoutingModule} from './app-routing.module';


// ANGULAR MATERIAL
import { MaterialModule } from './modules /material.module';



// COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { StampDialogComponent } from './components/dialogs/stamp-dialog/stamp-dialog.component';
import { ReportComponent } from './components/report/report.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDialogComponent } from './components/dialogs/employee-dialog/employee-dialog.component';





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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StampDialogComponent, EmployeeDialogComponent]
})
export class AppModule { }
