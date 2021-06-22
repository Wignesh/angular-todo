import { Component, OnInit } from '@angular/core';
import ToDo from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Array<ToDo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todos.subscribe((todos) => (this.todos = todos));
  }

  changeStatus(id: any) {
    this.todoService.changeTodoStatus(id);
  }

  deleteTodo(index: any) {
    this.todoService.deleteTodo(index);
  }
}
