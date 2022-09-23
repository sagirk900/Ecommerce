import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const userRoutes: Routes = [

  {path:'User',component:UserDashboardComponent
    ,children:[
      {path:'',component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class MainModulesRouting{

}
