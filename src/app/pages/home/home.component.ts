import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Models/Todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = new Date()
  todoString = ""
  tagString = ""
  todos: Todo[] = [{
    todo: "df",
    tag: "school",
    date: new Date()
  }]


  constructor(private todo: TodoService , private router: Router) { }

  ngOnInit(): void {
    this.updatetodo()

  }

  updatetodo(){
    this.todos = this.todo.getTodo()
  }

  addTodo(){
    
    this.todo.addTodo(this.todoString  , this.tagString)
    this.updatetodo()
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  log(val: any){
    console.log("clicked")
  }
}
