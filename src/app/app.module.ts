import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  // declarations are where components will go
  // CLI component generation automatically puts them here
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  // using modules like the HTTP or routing module go in imports
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  // providers are services you want to include
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
