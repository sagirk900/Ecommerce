import { FormsModule } from '@angular/forms';
import { MoreModulesModule } from './Main/User/MoreModules/moreModules.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './Main/Admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModules } from './Main/User/Modules/mainModules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    RouterModule,
    MainModules,
    NgbModule,
    MoreModulesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
