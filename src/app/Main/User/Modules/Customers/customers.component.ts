import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','My Customers');
   }

  ngOnInit(): void {
  }

}
