import { Component, OnInit } from '@angular/core';
declare function saleschart(): any;
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Sales');
  }

  ngOnInit(): void {
    saleschart();
  }

}
