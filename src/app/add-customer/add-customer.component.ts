import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import {CustomersService} from '../customers.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
 export class AddCustomerComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private cs:CustomersService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      CustomerName: ['', Validators.required ],  
      CustomerEmail: ['', Validators.required ],  
      CustomerUsername: ['', Validators.required ],
      CustomerPassword: ['', Validators.required]
    });  
  }  
  addCustomer(CustomerUsername,CustomerName,CustomerEmail,CustomerPassword){
    this.cs.addCustomer(CustomerUsername,CustomerName,CustomerEmail,CustomerPassword);
  }
 
  ngOnInit(): void {
  }

}

