import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// ROUTING
import {AppRoutingModule} from './app-routing.module';

// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatTableModule } from "@angular/material";

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { StampComponent } from './stamp/stamp.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StampComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
