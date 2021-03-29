import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit() {}

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      // need quotes for classnames with hyphens
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo: any) {
    console.log("toggle");
    todo.completed = !todo.completed;
    
  }

  onDelete(todo: any) {
    console.log("delete");
    
  }

}
