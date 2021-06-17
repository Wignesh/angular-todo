import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todo: string;
  todos: any;

  constructor() {
    this.todo = '';
    this.todos = this.getData('todos');
    // [
    //   {
    //     todo: '2:00 Meet with Laura ☕️',
    //     completed: true,
    //   },
    //   {
    //     todo: 'Polish brand idea',
    //     completed: false,
    //   },
    //   {
    //     todo: 'Design a prototype',
    //     completed: false,
    //   },
    // ];
  }

  ngOnInit(): void {}

  addTodo(event: any) {
    this.todos.push({
      todo: this.todo,
      completed: false,
    });
    this.setData('todos', this.todos);
    this.todo = '';
    event.preventDefault();
  }

  changeStatus() {
    this.setData('todos', this.todos);
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
    this.setData('todos', this.todos);
  }

  setData(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
}
