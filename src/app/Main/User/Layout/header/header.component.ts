import { Router } from '@angular/router';
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
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  collapsesidebar(){
    collapseSidebar();
  }
  gotoPath(path:string){
    console.log("clicked link");
    // path= '/'+path;
    this.router.navigateByUrl('User/'+path);
  }

}
