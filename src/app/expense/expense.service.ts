import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getCategories() {

    return this.http.get(`${this.apiUrl}/category`) ;
  }

  addCategory(category:Category) {

    
    return this.http.post(`${this.apiUrl}/category`, category); 
  
  }



  getExpenses() {

    return this.http.get(`${this.apiUrl}/expense_2019`) ;
  }


}
//git ignore testing.