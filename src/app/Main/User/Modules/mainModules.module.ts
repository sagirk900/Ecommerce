import { CustomersComponent } from './Customers/customers.component';
import { PercentDiscountComponent } from './Discounts/Coupon/PercentDiscount/percent-discount.component';
import { FreeShippingComponent } from './Discounts/Coupon/FreeShipping/free-shipping.component';
import { BuyGetFreeComponent } from './Discounts/Coupon/BuyGetFree/buy-get-free.component';
import { FlatDiscountComponent } from './Discounts/Coupon/FlatDiscount/flat-discount.component';
import { CouponComponent } from './Discounts/Coupon/coupon.component';
import { DiscountsComponent } from './Discounts/discounts.component';
import { DeliveryComponent } from './Delivery/delivery.component';
import { CreateOrderComponent } from './Orders/AllOrders/CreateOrder/create-order.component';
import { AbandonedCartsComponent } from './Orders/AbandonedCarts/abandoned-carts.component';
import { AllOrdersComponent } from './Orders/AllOrders/all-orders.component';
import { OrdersComponent } from './Orders/orders.component';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home.routing.module';
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
    UserDashboardComponent,
    OrdersComponent,
    AllOrdersComponent,
    AbandonedCartsComponent,
    CreateOrderComponent,
    DeliveryComponent,
    DiscountsComponent,
    CouponComponent,
    FlatDiscountComponent,
    BuyGetFreeComponent,
    FreeShippingComponent,
    PercentDiscountComponent,
    CustomersComponent
  ],
  imports:[
    LayoutModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    HomeModule
  ],
  exports:[],
  providers:[]
})
export class MainModules{

}
