import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserDashboardComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
  }

  getSelectedModule():string{
    return <string>sessionStorage.getItem("pageTitle");
  }
}
