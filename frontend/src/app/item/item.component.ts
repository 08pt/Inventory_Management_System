
import { Component, OnInit } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemPostFormGroup:FormGroup
  constructor(private http: HttpClient,formBuilder:FormBuilder) { 

    this.itemPostFormGroup = formBuilder.group({
      itemNo:"",
      itemName:"", 
      itemBrand:"", 
      itemQuantity:"", 
      itemPrice:"",
      itemSupplier:"",
      itemCreatedAt:"",
      itemUpdatedAt:"",
    })
   }

  ngOnInit(): void {
  }

  postAPI(){
  const data =  JSON.parse(JSON.stringify(this.itemPostFormGroup.value))
  console.log(data);
  return this.http.post("http://localhost:3000/items",data);

  
  
  };
   onSubmit(){

 this.postAPI().subscribe(data => {
  console.log("Data saved"); 
   })
}
}
