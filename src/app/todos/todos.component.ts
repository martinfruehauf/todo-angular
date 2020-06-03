import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  public selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  public getTodos(): void {
/*    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
    console.log(this.todos);*/
    this.todos = TODOS;
  }

  public ngOnInit(): void {
    this.getTodos();
  }

  public onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
