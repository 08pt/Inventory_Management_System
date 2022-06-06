import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  filepath="http://localhost:4200/customer/display";
  savepath="http://localhost:4200/customer/insert";
  expensepath="http://localhost:4200/items/display";
  makepath="http://localhost:4200/items/expenseinsert";
  constructor(private httpservice:HttpClient) { }

  getPatient():Observable<[]>{
    return this.httpservice.get<[]>(this.filepath);
  }
  saveUser(data:any){
    return  this.httpservice.post(this.savepath,data)
  }
  makeUser(data:any){
    return  this.httpservice.post(this.makepath,data)
  }
  getexpensedetails():Observable<[]>{
    return this.httpservice.get<[]>(this.expensepath)
  }

}