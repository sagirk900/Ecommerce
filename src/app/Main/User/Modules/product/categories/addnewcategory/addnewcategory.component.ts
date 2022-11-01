import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.component.html',
  styleUrls: ['./addnewcategory.component.css']
})
export class AddnewcategoryComponent implements OnInit {


  selectedSubMenuId=1;
  constructor() {
    sessionStorage.setItem('pageTitle','Categories');
    sessionStorage.setItem('subMenu','Information');
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
