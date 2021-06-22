import { Component, OnInit, OnDestroy } from '@angular/core';
import ToDo from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit, OnDestroy {
  todo: string;
  author: string;
  showNotification: boolean;

  constructor(private todoService: TodoService) {
    this.todo = '';
    this.author = '';
    this.showNotification = false;
  }
  ngOnDestroy() {}

  ngOnInit(): void {}

  addTodo(event: any) {
    this.todoService.addTodo({
      todo: this.todo,
      author: this.author,
      completed: false,
      createdAt: Date.now(),
      updatedAt: null,
    });

    this.todo = '';
    this.author = '';
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 2000);
    event.preventDefault();
  }
}
