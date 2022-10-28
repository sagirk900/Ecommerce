import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-setting',
  templateUrl: './store-setting.component.html',
  styleUrls: ['./store-setting.component.css']
})
export class StoreSettingComponent implements OnInit {

  selectedSubMenuId=1;
  constructor() {
    sessionStorage.setItem('pageTitle','Store Setting');
    sessionStorage.setItem('subMenu','Preferances');
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
