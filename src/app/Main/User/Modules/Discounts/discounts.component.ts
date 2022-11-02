import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

couponCount=0;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Discount Coupons');
   }

  ngOnInit(): void {

    this.couponCount = parseInt(<string>(sessionStorage.getItem('couponCount')==null?"0":sessionStorage.getItem('couponCount')));
    console.log(sessionStorage.getItem('couponCount'))
  }
  gotoURL(id:number){
    if(id==0){
      this.router.navigateByUrl('User/Coupon');
    }
    else if(id==1){
      this.router.navigateByUrl('User/Coupon/FlatDiscount');
    }
    else if(id==2){
      this.router.navigateByUrl('User/Coupon/BuyGetFree');
    }
    else if(id==3){
      this.router.navigateByUrl('User/Coupon/FreeShipping');
    }
  }
}
