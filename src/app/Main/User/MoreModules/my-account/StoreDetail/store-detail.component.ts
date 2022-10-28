import { CountryModel } from './../../../../Shared/Models/Country.model';
import { CategoryModel } from './../../../../Shared/Models/Category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  url="./../../../../../../assets/images/store.png";
  selectedCat!:number;
  selectedCatText:string="";
  CategoryList!:CategoryModel[];
  selectedPcodeCountry:number=1;
  selectedPcodePath:string='./../../../../../../assets/images/indiaFlag.png';
  selectedPcode:string="+91";
  selectedCurCountry!:number;
  selectedCurCountryText:string="";
  CountryList!:CountryModel[];
  constructor() {
    sessionStorage.setItem('subMenu','Store Details');
    this.CategoryList = [
                      new CategoryModel(0,'Kirana, Store FMCG & Grocery','./../../../../../../assets/images/grocery.png')
                      ,new CategoryModel(1,'Restaurants & Hotels','./../../../../../../assets/images/restaurant.jpg')
                      ,new CategoryModel(2,'Fashion Apparels, Shoes & Accessories','./../../../../../../assets/images/fashion.jpg')
                      ,new CategoryModel(3,'Fruits & Vegetables','./../../../../../../assets/images/fruit.jpg')
                      ,new CategoryModel(4,'Mobiles, Computers & Other Accessories','./../../../../../../assets/images/laptop.jpg')
                      ,new CategoryModel(5,'Books & Stationery Products','./../../../../../../assets/images/books.jpg')
                      ,new CategoryModel(6,'Beauty & Cosmetics','./../../../../../../assets/images/beauty.jpg')
                      ,new CategoryModel(7,'Home Decoration & Electronic Appliances','./../../../../../../assets/images/appliances.jpg')
                      ,new CategoryModel(8,'Pharmacy & Medical Care','./../../../../../../assets/images/pharmacy.jpg')
                      ,new CategoryModel(9,'Bakery & Cake Shops','./../../../../../../assets/images/cake.jpg')
                      ,new CategoryModel(10,'Fresh Chicken, Fish, & Meat','./../../../../../../assets/images/chicken.jpg')
                      ,new CategoryModel(11,'Local & Online Services','./../../../../../../assets/images/working.jpg')
                      ,new CategoryModel(12,'Jewellery, Gold, & Gems','./../../../../../../assets/images/jwellery.jpg')
                      ,new CategoryModel(13,'Insurance & Financial Services','./../../../../../../assets/images/currency.jpg')
                      ,new CategoryModel(14,'Gym & Sports Equipment','./../../../../../../assets/images/gym.jpg')
                      ,new CategoryModel(15,'Hardware & Construction Tools','./../../../../../../assets/images/hardware.jpg')
                      ,new CategoryModel(16,'Transportation, Taxi, Travel, & Tourism','./../../../../../../assets/images/taxi.jpg')
                      ,new CategoryModel(17,'Car, Bike, Tractor & Vehicle Accessories','./../../../../../../assets/images/bike.jpg')
                        ];
    this.CountryList = [
                      new CountryModel(1,'India','./../../../../../../assets/images/indiaFlag.png','₹','+91')
                      ,new CountryModel(2,'Saudi Arabia','./../../../../../../assets/images/SARFlag.jpg','SR','+966')
                      ,new CountryModel(3,'USA','./../../../../../../assets/images/USFlag.jpg','$','+1')
    ]
  }

  ngOnInit(): void {
  }
  onFileChanged(event:any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
        this.url = <string>reader.result;
    }
}
selectedCategory(id:number|null){
  this.selectedCat = <number>id;
  this.selectedCatText = <string>(<CategoryModel>this.CategoryList.find(x=>x.id == id)).text;
}
changePcode(id:number|null){
  this.selectedPcodeCountry=<number>id;
  let selectedCountry:CountryModel = <CountryModel>this.CountryList.find(x=>x.id == id);
  this.selectedPcode = <string>selectedCountry.phoneCode;
  this.selectedPcodePath = <string>selectedCountry.path;
}

changeCountryCur(id:number|null){
  this.selectedCurCountry=<number>id;
  let selectedCountry:CountryModel = <CountryModel>this.CountryList.find(x=>x.id == id);
  this.selectedCurCountryText = selectedCountry.text + " (" + selectedCountry.currency + ")";
}
}
