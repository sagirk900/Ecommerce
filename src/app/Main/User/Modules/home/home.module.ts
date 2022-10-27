import { HomeStepComponent } from './home-step/home-step.component';
import { UserDashboardComponent } from './../user-dashboard/user-dashboard.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    HomeStepComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]

})
export class HomeModule { }
