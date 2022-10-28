import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SubscriptionComponent } from './Subscription/subscription.component';
import { InvoicesComponent } from './Invoices/invoices.component';
import { StoreDetailComponent } from './StoreDetail/store-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../../../app-routing.module';
import { MyAccountRoutingModule } from './my-account.routing.module';
import { MyAccountComponent } from './my-account.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[MyAccountComponent
              , StoreDetailComponent
              ,InvoicesComponent
              , SubscriptionComponent],
  imports:[MyAccountRoutingModule
        , BrowserModule
        ,CommonModule
        ,FormsModule],
})
export class MyAccountModule{

}
