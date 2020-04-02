import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './card/app-routing.module';
import { FixedHeaderComponent } from './fixed-header/fixed-header.component';
import { CardComponent } from './card/card.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, AppRoutingModule, BrowserAnimationsModule , NgbModule],
  declarations: [ AppComponent, FixedHeaderComponent, CardComponent, ProductdescriptionComponent],
  bootstrap:    [ AppComponent,  FixedHeaderComponent ]
  
})
export class AppModule { }
