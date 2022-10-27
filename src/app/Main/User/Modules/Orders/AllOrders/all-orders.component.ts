import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addOrder(){
    console.log("create order called");
    this.router.navigateByUrl('User/Orders/AddOrder');
  }
}
