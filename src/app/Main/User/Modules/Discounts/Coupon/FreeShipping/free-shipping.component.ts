import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-shipping',
  templateUrl: './free-shipping.component.html',
  styleUrls: ['./free-shipping.component.css']
})
export class FreeShippingComponent implements OnInit {

  couponCount=0;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Create Free Shipping Coupon');
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
