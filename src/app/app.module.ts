import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';  

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {CustomerService} from './customer.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    FormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
    

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
