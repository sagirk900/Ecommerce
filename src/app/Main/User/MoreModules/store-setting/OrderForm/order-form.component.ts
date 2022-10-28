import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Order Form');
  }

  ngOnInit(): void {
  }

}
