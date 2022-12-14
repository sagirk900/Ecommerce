
import { AllProductComponent } from './../product/AllProducts/AllProduct.component';
import { ProductsAnalyticsComponent } from './../Analytics/Products/products.component';
import { TrafficComponent } from './../Analytics/Traffic/traffic.component';
import { SalesComponent } from './../Analytics/Sales/sales.component';
import { AnalyticsComponent } from './../Analytics/analytics.component';
import { WarehouseComponent } from './../../MoreModules/store-setting/Warehouse/warehouse.component';
import { SupportAndSocialComponent } from './../../MoreModules/store-setting/SupportAndSocial/support-and-social.component';
import { StoreTimingComponent } from './../../MoreModules/store-setting/StoreTiming/store-timing.component';
import { StaffAccountsComponent } from './../../MoreModules/store-setting/StaffAccounts/staff-accounts.component';
import { ShippingComponent } from './../../MoreModules/store-setting/Shipping/shipping.component';
import { PreferancesComponent } from './../../MoreModules/store-setting/Preferances/preferances.component';
import { PoliciesComponent } from './../../MoreModules/store-setting/Policies/policies.component';
import { PaymentsComponent } from './../../MoreModules/store-setting/Payments/payments.component';
import { OrderFormComponent } from './../../MoreModules/store-setting/OrderForm/order-form.component';
import { LanguagesComponent } from './../../MoreModules/store-setting/Languages/languages.component';
import { ExtraChargesComponent } from './../../MoreModules/store-setting/ExtraCharges/extra-charges.component';
import { DomainsComponent } from './../../MoreModules/store-setting/Domains/domains.component';
import { CustomersComponent } from './../Customers/customers.component';
import { FreeShippingComponent } from './../Discounts/Coupon/FreeShipping/free-shipping.component';
import { BuyGetFreeComponent } from './../Discounts/Coupon/BuyGetFree/buy-get-free.component';
import { FlatDiscountComponent } from './../Discounts/Coupon/FlatDiscount/flat-discount.component';
import { PercentDiscountComponent } from './../Discounts/Coupon/PercentDiscount/percent-discount.component';
import { CouponComponent } from './../Discounts/Coupon/coupon.component';
import { DiscountsComponent } from './../Discounts/discounts.component';
import { DeliveryComponent } from './../Delivery/delivery.component';
import { CreateOrderComponent } from './../Orders/AllOrders/CreateOrder/create-order.component';
import { AbandonedCartsComponent } from './../Orders/AbandonedCarts/abandoned-carts.component';
import { AllOrdersComponent } from './../Orders/AllOrders/all-orders.component';
import { OrdersComponent } from './../Orders/orders.component';
import { TutorialsComponent } from './../../MoreModules/tutorials/tutorials.component';
import { StoreSettingComponent } from './../../MoreModules/store-setting/store-setting.component';
import { InvoicesComponent } from './../../MoreModules/my-account/Invoices/invoices.component';
import { SubscriptionComponent } from './../../MoreModules/my-account/Subscription/subscription.component';
import { StoreDetailComponent } from './../../MoreModules/my-account/StoreDetail/store-detail.component';
import { HomeComponent } from './home.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyAccountComponent } from '../../MoreModules/my-account/my-account.component';
import { ProductComponent } from '../product/product.component';
import { AddnewproductComponent } from '../product/addnewproduct/addnewproduct.component';
import { CategoriesComponent } from '../product/categories/categories.component';
import { InventoriesComponent } from '../product/inventories/inventories.component';
import { AddnewcategoryComponent } from '../product/categories/addnewcategory/addnewcategory.component';
import { CategoryInformationComponent } from '../product/categories/category-information/category-information.component';
import { CategoryBannerComponent } from '../product/categories/category-banner/category-banner.component';
import { CategoryContentComponent } from '../product/categories/category-content/category-content.component';


const userRoutes: Routes = [

  {
    path: 'User', component: UserDashboardComponent
    , children: [
      { path: '', component: HomeComponent },
      {
        path: 'MyAccount', component: MyAccountComponent,
        children: [
          { path: '', component: StoreDetailComponent },
          { path: 'Subscription', component: SubscriptionComponent },
          { path: 'Invoices', component: InvoicesComponent }
        ]
      },
      {
        path: 'StoreSetting', component: StoreSettingComponent,
        children: [
          { path: 'Domains', component: DomainsComponent },
          { path: 'ExtraCharges', component: ExtraChargesComponent },
          { path: 'Languages', component: LanguagesComponent },
          { path: 'OrderForm', component: OrderFormComponent },
          { path: 'Payments', component: PaymentsComponent },
          { path: 'Policies', component: PoliciesComponent },
          { path: '', component: PreferancesComponent },
          { path: 'Shipping', component: ShippingComponent },
          { path: 'StaffAccounts', component: StaffAccountsComponent },
          { path: 'StoreTiming', component: StoreTimingComponent },
          { path: 'SupportAndSocial', component: SupportAndSocialComponent },
          { path: 'Warehouse', component: WarehouseComponent }
        ]
      },
      { path: 'Tutorial', component: TutorialsComponent },
      {
        path: 'Orders', component: OrdersComponent,
        children: [
          { path: '', component: AllOrdersComponent },
          { path: 'AddOrder', component: CreateOrderComponent },
          { path: 'AbondanedCarts', component: AbandonedCartsComponent }
        ]
      },
      {
        path: 'Analytics', component: AnalyticsComponent,
        children: [
          { path: '', component: SalesComponent },
          { path: 'AnalyticTraffic', component: TrafficComponent },
          { path: 'AnalyticProd', component: ProductsAnalyticsComponent }
        ]
      },
      { path: 'Delivery', component: DeliveryComponent },
      {
        path: 'Product', component: ProductComponent,
        children: [
          { path: '', component: AllProductComponent },
          { path: 'AddNewProduct', component: AddnewproductComponent },
          { path: 'pcategories', component: CategoriesComponent,},
          { path: 'pinventories', component: InventoriesComponent },
          { path: 'AddNewcategory', component: AddnewcategoryComponent },
        ]
      },

      // {
      //   path: 'pcategories', component: CategoriesComponent,
      //   children: [
      //     { path: 'AddNewcategory', component: AddnewcategoryComponent },
      //     { path: 'cinformation', component: CategoryInformationComponent },
      //     { path: 'cbanner', component: CategoryBannerComponent },
      //     { path: 'ccontent', component: CategoryContentComponent },
      //   ]
      // },

      { path: 'Discounts', component: DiscountsComponent },
      {
        path: 'Coupon', component: CouponComponent,
        children: [
          { path: '', component: PercentDiscountComponent },
          { path: 'FlatDiscount', component: FlatDiscountComponent },
          { path: 'BuyGetFree', component: BuyGetFreeComponent },
          { path: 'FreeShipping', component: FreeShippingComponent },
        ]
      },
      { path: 'Customers', component: CustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
