import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private url = 'https:/localhost:3000/customer';

  constructor(private http: HttpClient) { }
  
  getPosts() {
    return this.http.get(this.url);
  }
  }

