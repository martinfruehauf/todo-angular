import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
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
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
    console.log(this.todos);
  }

  public ngOnInit(): void {
    this.getTodos();
  }

  public open(todo: Todo) {
    const modalRef = this.modalService.open(TodoDetailModalComponent, {
      backdrop : 'static',
      keyboard : false
    });
    modalRef.componentInstance.todo = todo;
    console.log('in todos.component.ts open(todo: Todo)   modalRef.componentInstance.todo ', modalRef.componentInstance.todo);
  }
}
