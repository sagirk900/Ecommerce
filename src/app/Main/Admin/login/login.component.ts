import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
isLoginPage:boolean=true;
pageTitle!:string;
  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.isLoginPage = id==1?false:true;
      this.pageTitle = this.isLoginPage ? "Sign In" : "Start 7-days free trial"
      });
  }
  title = 'First-App';
  showEye:boolean=false;
  typeCnfPassword:string='password';
  cnfPasswordText:string="fa fa-eye-slash input-group-text";
  hideIconText:string = "fa fa-eye-slash input-group-text";
  showIconText:string = "fa fa-eye input-group-text";
  cnfPasswordClick(){
    this.cnfPasswordText = this.cnfPasswordText == this.hideIconText?this.showIconText:this.hideIconText;
    this.typeCnfPassword = this.typeCnfPassword == "password"?"text":"password";
    return false;
  }
  formSubmit(){
    if(this.isLoginPage)
      this.router.navigate(['Purchase']);
    else
      this.router.navigate(['./ShopDetail']);
  }
}
