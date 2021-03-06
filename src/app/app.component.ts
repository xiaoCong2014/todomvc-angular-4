import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  /**
   * 最新的数据 , 临时的
   * @type {Todo}
   */
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);

    // 清空
    this.newTodo = new Todo();
  }

  // toggleTodoComplete(newTodo) {
  //   this.todoDataService.toggleTodoComplete(newTodo);
  // }

  // removeTodo(newTodo) {
  //   this.todoDataService.deleteTodoById(newTodo.id);
  // }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
