import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
const routes: Routes = [
   {
    path:'register',
    component: AddCustomerComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductsComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
