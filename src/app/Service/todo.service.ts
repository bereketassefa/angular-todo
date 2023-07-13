import { Injectable } from '@angular/core';
import { Todo } from '../Models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[] = [
    {
      todo: "finish assignment",
      tag: "work",
      date: new Date()
      
    },
    {
      todo: "clearn house",
      tag: "personal",
      date: new Date()
      
    },
    {
      todo: "clearn house",
      tag: "personal",
      date: new Date()
      
      
    },
  ]

  constructor() { }

  getTodo(){
    return this.todos
  }

  addTodo(todo: string , tag: string){
    let newtodo = {
      todo: todo,
      tag: tag,
      date: new Date()
    }
    console.log(newtodo)
    this.todos.push(newtodo)
  }
}
