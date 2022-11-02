import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css']
})
export class AddnewproductComponent implements OnInit {

  productCount=0;
  selectedSubMenuId=1;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Product');
    sessionStorage.setItem('subMenu','Product Information');
  }

  ngOnInit(): void {
    this.productCount = parseInt(<string>(sessionStorage.getItem('productCount')==null?"0":sessionStorage.getItem('productCount')));
  }

  getSubMenuTitle():string{
    return <string>sessionStorage.getItem('subMenu');
  }
  changeSubMenu(menuId:number){
    this.selectedSubMenuId = menuId;
  }

  AddNewProduct(){
    this.productCount+=1;
    sessionStorage.setItem('productCount',this.productCount.toString());
    this.router.navigateByUrl("User/Product");
  }
}
