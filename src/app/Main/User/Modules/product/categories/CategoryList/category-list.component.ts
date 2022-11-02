import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoAddCategory(){

    this.router.navigateByUrl('User/Product/AddNewcategory');
  }
}
