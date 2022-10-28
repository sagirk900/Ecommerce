import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Payments');
  }

  ngOnInit(): void {
  }

}
