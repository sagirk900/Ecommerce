import { StaffModel, RoleModel } from './../../../../Shared/Models/Staff.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-staff-accounts',
  templateUrl: './staff-accounts.component.html',
  styleUrls: ['./staff-accounts.component.css']
})
export class StaffAccountsComponent implements OnInit {
  staffCount=0;
  staffList:StaffModel[]=[];
  roleList:RoleModel[]=[
    new RoleModel(1,"Admin"),
    new RoleModel(2,"Manager"),
    new RoleModel(3,"Staff")
  ];
  constructor() {
    sessionStorage.setItem('subMenu','Staff Accounts');
   }


  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this.staffList.push(new StaffModel(this.getMaxStaffId(),data.name,data.contactDetail,parseInt(data.roleId)));
    this.staffCount = this.staffList.length;
  }
  getMaxStaffId(){
    let maxId=0;
    this.staffList.forEach(x=>{
      if(x.id!==null && x.id>maxId){
        maxId = x.id;
      }
    });
    return maxId
  }
  getRoleNameById(id:number|null){
    return <string>this.roleList.find(x=>x.id == id)?.text;
  }
}
