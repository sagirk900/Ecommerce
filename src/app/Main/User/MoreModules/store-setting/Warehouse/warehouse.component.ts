import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','WareHouse');
  }

  ngOnInit(): void {
  }

}
