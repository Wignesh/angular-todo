import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ToDo from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosSource = new BehaviorSubject<Array<ToDo>>(this.getData('todos'));
  todos = this.todosSource.asObservable();

  constructor() {}

  addTodo(todo: ToDo) {
    this.todosSource.next([...this.todosSource.value, todo]);
    this.setData('todos', this.todosSource.value);
  }

  changeTodoStatus(id: any) {
    this.todosSource.value[id] = {
      ...this.todosSource.value[id],
      updatedAt: Date.now(),
    };
    this.setData('todos', this.todosSource.value);
  }

  deleteTodo(index: any) {
    this.todosSource.value.splice(index, 1);
    this.setData('todos', this.todosSource.value);
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }
}
