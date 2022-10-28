import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  selectedSubMenuId=1;
  constructor() {
    sessionStorage.setItem('pageTitle','My Account');
    sessionStorage.setItem('subMenu','Store Details');
  }

  ngOnInit(): void {
  }

  getSubMenuTitle():string{
    return <string>sessionStorage.getItem('subMenu');
  }
  changeSubMenu(menuId:number){
    this.selectedSubMenuId = menuId;
  }
}
