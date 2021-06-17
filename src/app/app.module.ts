import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './component/todos/todos.component';
import { CustomNgStyleDirective } from './directive/customNgStyle/custom-ng-style.directive';
import { CustomNgForDirective } from './directive/customNgFor/custom-ng-for.directive';
import { CustomStyleComponent } from './component/custom-style/custom-style.component';
import { CustomForComponent } from './component/custom-for/custom-for.component';
@NgModule({
  declarations: [AppComponent, TodosComponent, CustomNgStyleDirective, CustomNgForDirective, CustomStyleComponent, CustomForComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
