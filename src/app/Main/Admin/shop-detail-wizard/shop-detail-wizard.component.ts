import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail-wizard',
  templateUrl: './shop-detail-wizard.component.html',
  styleUrls: ['./shop-detail-wizard.component.css']
})
export class ShopDetailWizardComponent implements OnInit {

  step:any=1;
  storeName:string="";
  shopURlInfoText="This is a temporary URL to start setting up your Shopify store. Once you setup your store, you can choose to keep it as-is, or replace it with a custom domain name. "
  storeNameTooltip="Haven't decided on a store name yet? We'll give you a temporary store name that you can change at any time"
  step1Title:string="Let's get Started. What's your store name?";
  step1Paragraph:string="You can skip this for now if you're still working on it";
  step2Title:string="Which of these best describes you?";
  step2Paragraph:string="We’ll help you get set up based on your business needs.";
  step3Title:string="Do you want to move an existing store to Shopify?";
  step3Paragraph:string="When you’re ready, we can help you import things like products, customers, and inventory.";
  step4Title:string="What do you plan to sell";
  step4Paragraph:string="Choose all that apply, and we'll make sure you're set up to sell.";
  step5Title:string="Where will you get your products?";
  step5Paragraph:string="Pick the option that best fits your business right now. You can always change this later";
  step6Title:string="Where will your business be located?";
  step6Paragraph:string="We’ll use your location to set up your default shipping rates, recommended apps, and more.";

  constructor(private router:Router) { }
  backClick(){
    this.step -=1;
  }
  nextClick(){
    if(this.step==6){
      this.router.navigate(['User']);
    }
    this.step +=1;
  }
  skipClick(){
    this.nextClick();
  }

  ngOnInit(): void {
  }

  barPercent(){
    return ((this.step-1)*25).toString()+'%';
  }
}
