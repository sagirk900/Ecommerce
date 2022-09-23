import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StartComponent } from "./Start/start.component";
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { PlanPurchaseComponent } from './plan-purchase/plan-purchase.component';

@NgModule({
  declarations:[
    StartComponent,
    LoginComponent,
    PlanPurchaseComponent
  ],
  imports:[
    RouterModule
    ,CommonModule
    ,BrowserModule],
  exports:[],
  providers:[]
})
export class AdminModule{

}
