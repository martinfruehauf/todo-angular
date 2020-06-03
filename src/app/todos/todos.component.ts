import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = TODOS;
  selectedTodo: Todo;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

}
