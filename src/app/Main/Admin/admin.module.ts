import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StartComponent } from "./Start/start.component";
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { PlanPurchaseComponent } from './plan-purchase/plan-purchase.component';
import { ShopDetailWizardComponent } from './shop-detail-wizard/shop-detail-wizard.component';

@NgModule({
  declarations:[
    StartComponent,
    LoginComponent,
    PlanPurchaseComponent,
    ShopDetailWizardComponent
  ],
  imports:[
    RouterModule
    ,CommonModule
    ,BrowserModule
    ,FormsModule
  ],
  exports:[],
  providers:[]
})
export class AdminModule{

}
