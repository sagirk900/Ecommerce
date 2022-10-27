import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
