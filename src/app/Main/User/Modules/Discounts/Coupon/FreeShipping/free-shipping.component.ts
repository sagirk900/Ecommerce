import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-shipping',
  templateUrl: './free-shipping.component.html',
  styleUrls: ['./free-shipping.component.css']
})
export class FreeShippingComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Create Free Shipping Coupon');
  }

  ngOnInit(): void {
  }

}
