import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() todo: string = ""
  @Input() tag: string = ""
  @Input() date: (Date | any)
  
  constructor(){
    console.log(this.todo , this.date , this.tag)
  }

}
