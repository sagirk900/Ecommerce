import { Component, OnInit } from '@angular/core';

declare function trafficchart(): any;
@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('pageTitle','Traffic');
  }

  ngOnInit(): void {
    trafficchart();
  }

}
