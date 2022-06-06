import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../-services.service';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  [x: string]: any;
  Customer:any[]=[];
  PatientName: any;
  PatientAge: any;
  _id: any;
  RegistrationDate: any;
  Disease:any;
  searchText:any;
  constructor(private patservice:CustomerServiceService){}
  ngOnInit(): void {
    this['customerservice'].getCustomer().subscribe((data:any)=>this.Customer=data.data);
  }
  search(){
    
    if(this.searchText ==""){
      this.ngOnInit();
    }
    else{
      this.Customer = this.Customer.filter(res =>{
        console.log(res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()))
        if(res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())==null){
          if(res._id.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())){
            return res._id.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          }
          else{
            if(res.PatientAge.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()))
            return res.PatientAge.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          }
        }else{
          return res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
        }
         
      })
      
    }
  }
}
