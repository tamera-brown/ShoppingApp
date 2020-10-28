import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  uri = 'http://localhost:4000/admin/customers';  

  constructor(private http: HttpClient) { }  
  addCustomer(CustomerUsername, CustomerName, CustomerEmail, CustomerPassword) {  
    const obj = {  
      CustomerUsername,
      CustomerName,
      CustomerEmail,
      CustomerPassword

    };  
    console.log(obj);  
    this.http.post(`${this.uri}/add`, obj)  
        .subscribe(res => console.log('Done'));  
  }  
}  

