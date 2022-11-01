export class StaffModel{
  public id:number|null;
  public name:string|null;
  public contactDetail:string|null;
  public roleId:number|null;
  constructor(
  id:number|null,
  name:string|null,
  contactDetail:string|null,
  roleId:number|null
  ){
    this.id=id;
    this.name = name
    this.contactDetail=contactDetail;
    this.roleId=roleId;
  }
}
export class DictonaryModel{
  public id:number|null;
  public text:string|null;
  constructor(
    id:number|null,
    text:string|null
  ){
    this.id = id;
    this.text = text;
  }
}
export class RoleModel extends DictonaryModel{
}

export class DeliveryTimeModel extends DictonaryModel{
}
export class TimeUnitModel extends DictonaryModel{

}
