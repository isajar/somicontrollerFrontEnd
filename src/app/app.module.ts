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
import { FormsModule } from '@angular/forms';
import { StampDialogComponent } from './stamp-dialog/stamp-dialog.component';
import { ReportComponent } from './report/report.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StampDialogComponent,
    ReportComponent,
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
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StampDialogComponent]
})
export class AppModule { }
