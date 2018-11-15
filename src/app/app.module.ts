import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

//for testing the json-server 
import { HttpClientModule } from '@angular/common/http';
import { ListExpenseComponent } from './expense/list-expense.component';
import { CreateExpenseComponent } from './expense/create-expense.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
  {path:'list', component: ListExpenseComponent},
  {path:'create', component: CreateExpenseComponent},
  {path:'', redirectTo:'/list', pathMatch: 'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    CreateExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
