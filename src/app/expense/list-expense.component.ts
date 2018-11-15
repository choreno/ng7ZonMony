import { Component, OnInit } from '@angular/core';

import { ExpenseService } from './expense.service';
import { Expense } from '../model/expense.model';


@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.scss']
})
export class ListExpenseComponent implements OnInit {

  expenses: Expense[];
  

  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {

    this.getCategories();
  }

  public getCategories() {
    this.expenseService.getCategories().subscribe((data:Expense[]) => {
      this.expenses = data; 
    }); 
  }
}
