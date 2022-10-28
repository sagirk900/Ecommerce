import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-and-social',
  templateUrl: './support-and-social.component.html',
  styleUrls: ['./support-and-social.component.css']
})
export class SupportAndSocialComponent implements OnInit {

  constructor() {
    sessionStorage.setItem('subMenu','Support & Social');
   }

  ngOnInit(): void {
  }

}
