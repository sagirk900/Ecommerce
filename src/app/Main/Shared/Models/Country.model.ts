export class CountryModel{
  public id:number|null;
  public text:string|null;
  public path:string|null;
  public currency:string|null;
  public phoneCode:string|null;
  constructor(
    id:number|null,
    text:string|null,
    path:string|null,
    currency:string|null,
    phoneCode:string|null,
  ){
    this.id = id;
    this.text = text;
    this.path = path;
    this.currency = currency;
    this.phoneCode = phoneCode;
  }
}
