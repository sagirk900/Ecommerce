import { InvoicesComponent } from './Invoices/invoices.component';
import { SubscriptionComponent } from './Subscription/subscription.component';
import { StoreDetailComponent } from './StoreDetail/store-detail.component';
import { MyAccountComponent } from './my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
const routes1: Routes = [
  // {path:'',component:StoreDetailComponent},
  // {path:'Subscription',component:SubscriptionComponent},
  // {path:'Invoices',component:InvoicesComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes1)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule{

}
