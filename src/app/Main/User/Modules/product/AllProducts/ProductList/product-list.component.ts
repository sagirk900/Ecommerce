import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoAddProduct(){
    this.router.navigateByUrl('User/Product/AddNewProduct');
  }
}
