import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  selectedSubMenuId=1;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Inventory');
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

  addNewProduct(){
    console.log("create order called");
    this.router.navigateByUrl('User/Product/AddNewProduct');
  }

}
