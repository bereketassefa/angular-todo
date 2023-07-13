import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from 'src/app/Models/Todo.model';
import { TodoService } from 'src/app/Service/todo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = new Date()
  todoString = ""
  tagString = ""
  activeTag = ""
  tags: string[] = ["work"  , "school" , "family" , "personal"]
  todosLoaded: Todo[] = []
  todos: Todo[] = []


  constructor(private todo: TodoService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todos = this.todo.getTodo()
    this.todosLoaded = this.todo.getTodo()
    this.route.queryParamMap.subscribe((newtag: ParamMap) => {
      this.activeTag = newtag.get('tag') as string
      this.todos = this.todosLoaded.filter(each => {
        
        return this.activeTag === 'all' ? true : each.tag === this.activeTag
      })
      console.log(this.todos)

    })


  }
  changeTag(tag: string){
    this.router.navigate([  ] , {  queryParams: {
      tag: tag
    }})
    console.log(tag)
  }
  updatetodo(){
    this.todos = this.todo.getTodo()
    this.todosLoaded = this.todo.getTodo()
  }

  addTodo(){
    
    this.todo.addTodo(this.todoString  , this.tagString)
    
    this.todosLoaded = this.todo.getTodo()
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  log(val: any){
    console.log("clicked")
  }
}
