import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-discount',
  templateUrl: './percent-discount.component.html',
  styleUrls: ['./percent-discount.component.css']
})
export class PercentDiscountComponent implements OnInit {
  couponCount=0;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Create Percent Discount Coupon');
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
