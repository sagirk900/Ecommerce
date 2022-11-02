import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-shipping',
  templateUrl: './free-shipping.component.html',
  styleUrls: ['./free-shipping.component.css']
})
export class FreeShippingComponent implements OnInit {

  couponCount=0;
  constructor() {
    sessionStorage.setItem('pageTitle','Create Free Shipping Coupon');
  }

  ngOnInit(): void {
    this.couponCount = parseInt(<string>sessionStorage.getItem('couponCount'));
  }

  AddCoupon()
  {
    sessionStorage.setItem('couponCount',this.couponCount.toString());
  }

}
