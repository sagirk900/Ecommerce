export class CategoryModel{
  public id:number|null;
  public text:string|null;
  public path:string|null;
  constructor(
  id:number|null,
  text:string|null,
  path:string|null
  ){
    this.id=id;
    this.text = text
    this.path=path;
  }
}
