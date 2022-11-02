import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-discount',
  templateUrl: './flat-discount.component.html',
  styleUrls: ['./flat-discount.component.css']
})
export class FlatDiscountComponent implements OnInit {

  couponCount=0;
  constructor() {
    sessionStorage.setItem('pageTitle','Create Flat Discount Coupon');
  }

  ngOnInit(): void {
    this.couponCount = parseInt(<string>sessionStorage.getItem('couponCount'));
  }

  AddCoupon()
  {
    sessionStorage.setItem('couponCount',this.couponCount.toString());
  }

}
