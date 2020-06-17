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
export class TodoDetailModalComponent implements AfterViewInit, OnInit{
  @Input() public todo: Todo;
  @Input() public baseTodoDTO: BaseTodoDTO;
  name: string;
  description: string;
  status: boolean;
  dueDate: Date;

  constructor(private todoService: TodoService, private modalService: NgbModal) {
    console.log('Constructor: Todo', this.todo);
    this.baseTodoDTO = {
      name: '',
      description: '',
      status: false,
      dueDate: null
    };
/*    this.name = this.todo.name;
    this.description = this.todo.description;
    this.status = this.todo.status;
    this.dueDate = this.todo.dueDate;*/
  }

  public save(){
    this.baseTodoDTO.name = this.name;
    this.baseTodoDTO.description = this.description;
    this.baseTodoDTO.status = this.status;
    this.baseTodoDTO.dueDate = this.dueDate;
    console.log('//&&&///&&&?????????? BASETODO', this.baseTodoDTO);
    console.log('//&&&///&&&?????????? ID', this.todo.id);
    // now call service update mehtod
    this.todoService.updateTodo(String(this.todo.id), this.baseTodoDTO).subscribe();
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.name = this.todo.name;
    this.description = this.todo.description;
    this.status = this.todo.status;
    this.dueDate = this.todo.dueDate;
  }
}
