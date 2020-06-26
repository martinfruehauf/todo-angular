import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoDetailModalComponent } from '../todo-detail-modal/todo-detail-modal.component';

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
  }

  public add() {
    const modalRef = this.modalService.open(TodoDetailModalComponent, {
      backdrop : 'static',
      keyboard : false
    });
    let todo: Todo;
    todo = {
      id: null,
      name: null,
      description: null,
      status: false,
      dueDate: null
    };
    modalRef.componentInstance.todo = todo;

  }
}
