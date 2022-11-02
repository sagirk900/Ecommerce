import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerCount=0;
  constructor() {
    sessionStorage.setItem('pageTitle','My Customers');
   }

  ngOnInit(): void {
  }
  AddCustomer(){
    this.customerCount+=1;
  }
}
