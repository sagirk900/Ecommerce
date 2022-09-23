import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations:[
    SidebarComponent,
    HeaderComponent
  ],
  imports:[
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  exports:[SidebarComponent,HeaderComponent],
  providers:[]
})
export class LayoutModule{

}
