import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
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

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  public getTodos(): void {
    console.log('###### get TODOS');
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
    console.log(this.todos);
  }

  public ngOnInit(): void {
    console.log('####### NG ON INIT');
    this.getTodos();
  }

  public open(todo: Todo) {
    console.log('####### open');
    const modalRef = this.modalService.open(TodoDetailModalComponent);
    modalRef.componentInstance.todo = todo;
  }
}
