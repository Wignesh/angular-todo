import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { TodosComponent } from './component/todos/todos.component';
import { ContactsComponent } from './component/contacts/contacts.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddTodoComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
