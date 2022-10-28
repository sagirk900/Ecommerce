import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-timing',
  templateUrl: './store-timing.component.html',
  styleUrls: ['./store-timing.component.css']
})
export class StoreTimingComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Store Timing');
  }

  ngOnInit(): void {
  }

}
