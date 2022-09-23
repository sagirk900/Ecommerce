import { ShopDetailWizardComponent } from './Main/Admin/shop-detail-wizard/shop-detail-wizard.component';
import { PlanPurchaseComponent } from './Main/Admin/plan-purchase/plan-purchase.component';
import { UserDashboardComponent } from './Main/User/Modules/user-dashboard/user-dashboard.component';
import { LoginComponent } from './Main/Admin/login/login.component';
import { StartComponent } from './Main/Admin/Start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'Login/:id',component:LoginComponent},
  {path:'Purchase',component:PlanPurchaseComponent},
  {path:'ShopDetail',component:ShopDetailWizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
