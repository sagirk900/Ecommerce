
import { MyAccountModule } from './my-account/my-account.module';
import { TutorialsComponent } from './tutorials/tutorials.component';
// import { StoreSettingComponent } from './store-setting/store-setting.component';
// import { MyAccountComponent } from './my-account/my-account.component';
import { NgModule } from "@angular/core";
import { LayoutModule } from './../Layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreSettingModule } from './store-setting/StoreSetting.module';
@NgModule({
  declarations:[
    // StoreSettingComponent,
    TutorialsComponent
  ],
  imports:[
    LayoutModule,
    RouterModule,
    CommonModule,
    BrowserModule,
    MyAccountModule,
    StoreSettingModule
  ],
  exports:[],
  providers:[],
})

export class MoreModulesModule{

}
