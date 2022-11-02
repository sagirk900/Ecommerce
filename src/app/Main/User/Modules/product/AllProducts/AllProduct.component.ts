import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './AllProduct.component.html',
  styleUrls: ['./AllProduct.component.css']
})
export class AllProductComponent implements OnInit {
  productCount=0;
  selectedSubMenuId=1;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Product');
  }

  ngOnInit(): void {
    this.productCount = parseInt(<string>(sessionStorage.getItem('productCount')==null?"0":sessionStorage.getItem('productCount')));
  }
  changeSubMenu(menuId:number){
    this.selectedSubMenuId = menuId;
  }

  addNewProduct(){
    console.log("create order called");
    this.router.navigateByUrl('User/Product/AddNewProduct');
  }
}
