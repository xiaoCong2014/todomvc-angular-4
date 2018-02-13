import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../todo';
import {TodoDataService} from '../todo-data.service';

@Component({
  selector: 'app-todo-in-list',
  templateUrl: './todo-in-list.component.html',
  styleUrls: ['./todo-in-list.component.css']
})
export class TodoInListComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}
