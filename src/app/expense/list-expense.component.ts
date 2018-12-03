import { Component, OnInit } from '@angular/core';

import { ExpenseService } from './expense.service';
import { Category } from '../model/category.model';


@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.scss']
})
export class ListExpenseComponent implements OnInit {

  categories: Category[];
  category: Category;

  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {

    this.getCategories();
  }

  

  public getCategories() {
    this.expenseService.getCategories().subscribe((data:Category[]) => {
      this.categories = data; 
    }); 
  }

  public addCategory(){

  
    this.category = {

      id : 444,
      name : "new damn category",
      createdDTTM : "12/3/2018",
      updatedDTTM : "12/3/2018"
    };
  
    this.expenseService.addCategory(this.category).subscribe((res:Response)=>{ 
      alert("Damn, new has been created!")

      
    }); 
  }



}
