import { DeliveryTimeModel, TimeUnitModel } from './../../../../Shared/Models/Staff.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  time=1;
  timeUnitId=1;
  selectedDeliveryTimeText="";
  selectedDeliveryTimeId=0;
  DeliveryTimeList:DeliveryTimeModel[]=[
    new DeliveryTimeModel(1,"30-60 minutes"),
    new DeliveryTimeModel(2,"1-4 hours"),
    new DeliveryTimeModel(3,"6-24 hours"),
    new DeliveryTimeModel(4,"1-3 days"),
    new DeliveryTimeModel(5,"3-5 days"),
    new DeliveryTimeModel(6,"5-10 days"),
    new DeliveryTimeModel(7,"10+ days"),
    // new DeliveryTimeModel(8,"Add custom time")
  ];
  timeUnitList:TimeUnitModel[]=[
    new TimeUnitModel(1,"minute"),
    new TimeUnitModel(2,"hour"),
    new TimeUnitModel(3,"day"),
  ]
  constructor() {
    sessionStorage.setItem('subMenu','Shipping');
  }

  ngOnInit(): void {
  }
  DeliveryTimeChange(id:number|null){
    this.selectedDeliveryTimeText = <string>this.DeliveryTimeList.find(x=>x.id == id)?.text;
    this.selectedDeliveryTimeId = <number>id;
  }
  onTimeModelSubmit(data:any){
    console.log(data);
    let previewText = this.getAndSetDeliveryTimeDetail(data.timeUnitId,data.time)
    this.DeliveryTimeList.push(new DeliveryTimeModel(this.getMaxDeliveryTimeId(),previewText))
    this.selectedDeliveryTimeText = previewText;

  }
  getAndSetDeliveryTimeDetail(timeUnitId:number|null,Time:number|null){
    let previewText = Time?.toString()+ " " + <string>this.timeUnitList.find(x=>x.id == <number>timeUnitId)?.text;
    return previewText;
  }
  getMaxDeliveryTimeId(){
    let maxId = 8
    this.DeliveryTimeList.forEach(x=>{
      if(x.id!=null && x.id>maxId){
        maxId = x.id;
      }
    });
    return maxId;
  }
}
