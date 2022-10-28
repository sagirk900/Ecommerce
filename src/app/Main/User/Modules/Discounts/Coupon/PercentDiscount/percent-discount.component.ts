import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-discount',
  templateUrl: './percent-discount.component.html',
  styleUrls: ['./percent-discount.component.css']
})
export class PercentDiscountComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Create Percent Discount Coupon');
   }

  ngOnInit(): void {
  }

}
