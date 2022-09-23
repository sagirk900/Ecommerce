import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare function collapseSidebar():any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
public iscollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }
  collapsesidebar(){
    collapseSidebar();
  }

}
