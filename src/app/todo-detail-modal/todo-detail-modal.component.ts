import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import { Todo } from '../todo';
import {BaseTodoDTO} from '../baseTodoDTO';
import {TodoService} from '../todo.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-detail-modal',
  templateUrl: './todo-detail-modal.component.html',
  styleUrls: ['./todo-detail-modal.component.css']
})
export class TodoDetailModalComponent implements OnInit{
  @Input() public todo: Todo;
  @Input() public baseTodoDTO: BaseTodoDTO;
  name: string;
  description: string;
  status: boolean;
  dueDate: Date;

  constructor(private todoService: TodoService, private modalService: NgbModal) {
    this.baseTodoDTO = {
      name: '',
      description: '',
      status: false,
      dueDate: null
    };
  }

  public save(){
    this.baseTodoDTO.name = this.name;
    this.baseTodoDTO.description = this.description;
    this.baseTodoDTO.status = this.status;
    this.baseTodoDTO.dueDate = this.dueDate;
    if (this.todo.id) {
      this.todoService.updateTodo(String(this.todo.id), this.baseTodoDTO).subscribe();
    } else {
      this.todoService.addTodo(this.baseTodoDTO).subscribe();
    }
  }

  ngOnInit(): void {
    this.name = this.todo.name;
    this.description = this.todo.description;
    this.status = this.todo.status;
    this.dueDate = this.todo.dueDate;
  }
}

