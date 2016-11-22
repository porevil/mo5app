import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoService } from '../../providers/todo-service/todo-service';
import { ProductList } from '../../providers/product-list/product-list';
import { Todo }                from '../../model/todo';

/*
  Generated class for the TodopagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	providers: [TodoService,ProductList],
  templateUrl: 'build/pages/todopage/todopage.html',
})
export class TodopagePage {
	todos: Todo[] = null;
	newTodo: Todo = new Todo();
  constructor(private nav: NavController,private todoService: TodoService) {
  	this.todos = todoService.getAllTodos();
  }

  addTodo(){
  	console.debug('add todo');
  	this.todoService.addTodo(this.newTodo)
  	this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    //this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
  	console.log('remove todo id '+todo.id);
  	this.todoService.deleteTodoById(todo.id)
  }

get allTodo() {
    return this.todoService.getAllTodos();
  }

}
