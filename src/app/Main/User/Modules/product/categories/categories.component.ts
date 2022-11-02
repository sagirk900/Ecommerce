import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryCount=0;
  selectedSubMenuId=1;
  constructor(private router:Router) {
    sessionStorage.setItem('pageTitle','Categories');
    sessionStorage.setItem('subMenu','Product Information');
  }


  ngOnInit(): void {
    this.categoryCount = parseInt(<string>(sessionStorage.getItem('categoryCount')==null?"0":sessionStorage.getItem('categoryCount')));
  }

  addNewCategory(){
    this.router.navigateByUrl('User/Product/AddNewcategory');
  }

}
