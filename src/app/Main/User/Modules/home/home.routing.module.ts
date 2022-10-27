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


const userRoutes: Routes = [

  {path:'User',component:UserDashboardComponent
    ,children:[
      {path:'',component:HomeComponent},
      {path:'MyAccount',component:MyAccountComponent,
        children:[
          {path:'',component:StoreDetailComponent},
          {path:'Subscription',component:SubscriptionComponent},
          {path:'Invoices',component:InvoicesComponent}
        ]
      },
      {path:'StoreSetting',component:StoreSettingComponent},
      {path:'Tutorial',component:TutorialsComponent},
      {path:'Orders',component:OrdersComponent,
        children:[
          {path:'',component:AllOrdersComponent},
          {path:'AddOrder',component:CreateOrderComponent},
          {path:'AbondanedCarts',component:AbandonedCartsComponent}
        ]
      },
      {path:'Delivery',component:DeliveryComponent},
      {path:'Discounts',component:DiscountsComponent},
      {path:'Coupon',component:CouponComponent,
        children:[
          {path:'',component:PercentDiscountComponent},
          {path:'FlatDiscount',component:FlatDiscountComponent},
          {path:'BuyGetFree',component:BuyGetFreeComponent},
          {path:'FreeShipping',component:FreeShippingComponent},
        ]
      },
      {path:'Customers',component:CustomersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class HomeRoutingModule{

}
