import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-discount',
  templateUrl: './flat-discount.component.html',
  styleUrls: ['./flat-discount.component.css']
})
export class FlatDiscountComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Create Flat Discount Coupon');
  }

  ngOnInit(): void {
  }

}
