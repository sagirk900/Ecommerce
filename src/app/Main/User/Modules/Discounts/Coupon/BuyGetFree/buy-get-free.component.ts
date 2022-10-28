import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-get-free',
  templateUrl: './buy-get-free.component.html',
  styleUrls: ['./buy-get-free.component.css']
})
export class BuyGetFreeComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Create Buy X Get Y Free Coupon');
  }

  ngOnInit(): void {
  }

}
