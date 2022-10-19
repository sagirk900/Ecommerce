import { MainModulesRouting } from './mainModules-routing.module';
import { SidebarComponent } from './../Layout/sidebar/sidebar.component';
import { HeaderComponent } from './../Layout/header/header.component';
import { LayoutModule } from './../Layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeStepComponent } from './home/home-step/home-step.component';

@NgModule({
  declarations:[
    HomeComponent,
    UserDashboardComponent,
    HomeStepComponent
  ],
  imports:[
    LayoutModule,
    MainModulesRouting,
    RouterModule,
    CommonModule,
    BrowserModule
  ],
  exports:[],
  providers:[]
})
export class MainModules{

}
