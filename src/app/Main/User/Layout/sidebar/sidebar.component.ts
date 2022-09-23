import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  constructor() { }
  userName:string="ABC cloths"
  ngAfterViewInit(): void {

  }


}
