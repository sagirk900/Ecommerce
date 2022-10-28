import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-charges',
  templateUrl: './extra-charges.component.html',
  styleUrls: ['./extra-charges.component.css']
})
export class ExtraChargesComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Extra Charges');
   }

  ngOnInit(): void {
  }

}
