import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  selectedSubMenuId=1;
  constructor() {
    sessionStorage.setItem('pageTitle','Categories');
    sessionStorage.setItem('subMenu','Product Information');
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
