import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
 export class AddCustomerComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      Name: ['', Validators.required ],  
      Email: ['', Validators.required,Validators.email ],  
      Username: ['', Validators.required ],
      Password: ['', Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
    });  
  }  
  
 
  ngOnInit(): void {
  }

}

