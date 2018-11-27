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
  

  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {

    this.getCategories();
  }

  public getCategories() {
    this.expenseService.getCategories().subscribe((data:Category[]) => {
      this.categories = data; 
    }); 
  }
}
