import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferances',
  templateUrl: './preferances.component.html',
  styleUrls: ['./preferances.component.css']
})
export class PreferancesComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Preferances');
   }

  ngOnInit(): void {
  }

}
