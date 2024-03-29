import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

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

  onToggle(todo: Todo) {
    console.log('toggled', todo);
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo);
    });
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
