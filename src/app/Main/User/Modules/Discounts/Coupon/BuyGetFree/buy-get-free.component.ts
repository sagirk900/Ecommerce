import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-get-free',
  templateUrl: './buy-get-free.component.html',
  styleUrls: ['./buy-get-free.component.css']
})
export class BuyGetFreeComponent implements OnInit {
  couponCount=0;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Create Buy X Get Y Free Coupon');
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
