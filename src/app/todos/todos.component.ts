import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
import { TodoService } from '../todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TodoDetailModalComponent} from '../todo-detail-modal/todo-detail-modal.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  public selectedTodo: Todo;

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  public getTodos(): void {
    console.log('###### get TODOS');
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
    console.log(this.todos);
    /*this.todos = TODOS;*/
  }

  public ngOnInit(): void {
    console.log('####### NG ON INIT');
    this.getTodos();
  }

  public onSelect(todo: Todo): void {
    console.log('####### on Select', todo);
    this.selectedTodo = todo;
  }

  public open(todo: Todo) {
    console.log('####### open');
    const modalRef = this.modalService.open(TodoDetailModalComponent);
    modalRef.componentInstance.todo = todo;
  }
}
