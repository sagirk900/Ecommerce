import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.component.html',
  styleUrls: ['./addnewcategory.component.css']
})
export class AddnewcategoryComponent implements OnInit {

  categoryCount=0;
  selectedSubMenuId=1;
  constructor( private router:Router) {
    sessionStorage.setItem('pageTitle','Categories');
  }

  ngOnInit(): void {
    this.categoryCount = parseInt(<string>(sessionStorage.getItem('categoryCount')==null?"0":sessionStorage.getItem('categoryCount')));
  }

  AddNewCategory(){
    this.categoryCount+=1;
    sessionStorage.setItem('categoryCount',this.categoryCount.toString());
    this.router.navigateByUrl("User/Product/pcategories");
  }

}
