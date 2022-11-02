import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-discount',
  templateUrl: './flat-discount.component.html',
  styleUrls: ['./flat-discount.component.css']
})
export class FlatDiscountComponent implements OnInit {

  couponCount=0;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Create Flat Discount Coupon');
  }

  ngOnInit(): void {
    this.couponCount = parseInt(<string>(sessionStorage.getItem('couponCount')==null?"0":sessionStorage.getItem('couponCount')));
  }

  AddCoupon()
  {
    this.couponCount +=1;
    sessionStorage.setItem('couponCount',this.couponCount.toString());
    this.router.navigateByUrl("User/Discounts");
  }

}
