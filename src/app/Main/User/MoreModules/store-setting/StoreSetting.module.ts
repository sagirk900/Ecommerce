import { FormsModule } from '@angular/forms';
import { WarehouseComponent } from './Warehouse/warehouse.component';
import { SupportAndSocialComponent } from './SupportAndSocial/support-and-social.component';
import { StoreTimingComponent } from './StoreTiming/store-timing.component';
import { StaffAccountsComponent } from './StaffAccounts/staff-accounts.component';
import { ShippingComponent } from './Shipping/shipping.component';
import { PreferancesComponent } from './Preferances/preferances.component';
import { PoliciesComponent } from './Policies/policies.component';
import { PaymentsComponent } from './Payments/payments.component';
import { OrderFormComponent } from './OrderForm/order-form.component';
import { LanguagesComponent } from './Languages/languages.component';
import { ExtraChargesComponent } from './ExtraCharges/extra-charges.component';
import { DomainsComponent } from './Domains/domains.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreSettingComponent } from './store-setting.component';
import { NgModule } from "@angular/core";
@NgModule({
  declarations:[
    StoreSettingComponent,
    DomainsComponent,
    ExtraChargesComponent,
    LanguagesComponent,
    OrderFormComponent,
    PaymentsComponent,
    PoliciesComponent,
    PreferancesComponent,
    ShippingComponent,
    StaffAccountsComponent,
    StoreTimingComponent,
    SupportAndSocialComponent,
    WarehouseComponent
  ]
  ,imports:[
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule]
})
export class StoreSettingModule{

}
