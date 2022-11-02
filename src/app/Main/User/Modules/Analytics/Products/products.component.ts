import { Component, OnInit } from '@angular/core';
declare function productschart(): any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Products');
  }

  ngOnInit(): void {
    productschart();
  }

}
