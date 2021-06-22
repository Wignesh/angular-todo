import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './component/todos/todos.component';
import { CustomNgStyleDirective } from './directive/customNgStyle/custom-ng-style.directive';
import { CustomNgForDirective } from './directive/customNgFor/custom-ng-for.directive';
import { CustomStyleComponent } from './component/custom-style/custom-style.component';
import { CustomForComponent } from './component/custom-for/custom-for.component';
import { NavComponent } from './component/nav/nav.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { ContactsComponent } from './component/contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CustomNgStyleDirective,
    CustomNgForDirective,
    CustomStyleComponent,
    CustomForComponent,
    NavComponent,
    AddTodoComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
