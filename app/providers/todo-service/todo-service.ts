import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Todo }                from '../../model/todo';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {
  data: any
  lastId : number
  todos : Todo[] = []

  constructor(private http: Http) {
    this.data = null
  }
  addTodo(todo: Todo): TodoService{
    console.log('addTodo Service '+todo.id)
    if(!todo.id){
      todo.id = ++this.lastId
    }
    this.todos.push(todo)
    return this;
  }

  deleteTodoById(id:number): TodoService {
    console.log('deleteTodoById Service '+id)
    this.todos = this.todos
      .filter(todo=>todo.id != id)

    return this;
  }

  getAllTodos(): Todo[] {
    console.log('getAllTodos Service')
    return this.todos
  }

  getTodoById(id:number): Todo{
    return this.todos
    .filter(todo=>todo.id===id)
    .pop();

  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

