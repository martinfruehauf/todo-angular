import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import { Todo } from '../todo';
import {BaseTodoDTO} from '../baseTodoDTO';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail-modal',
  templateUrl: './todo-detail-modal.component.html',
  styleUrls: ['./todo-detail-modal.component.css']
})
export class TodoDetailModalComponent implements AfterViewInit, OnInit{
  @Input() public todo: Todo;
  @Input() public baseTodoDTO: BaseTodoDTO;
  @ViewChild('name') name: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('status') status: ElementRef;
  @ViewChild('dueDate') dueDate: ElementRef;

  constructor(private todoService: TodoService) {
    this.baseTodoDTO = {
      name: '',
      description: '',
      status: false,
      dueDate: null
    };
  }

  public save(){
    this.baseTodoDTO.name = this.name.nativeElement.value;
    this.baseTodoDTO.description = this.description.nativeElement.value;
    this.baseTodoDTO.status = this.status.nativeElement.checked;
    this.baseTodoDTO.dueDate = new Date(this.dueDate.nativeElement.value);
    console.log('//&&&///&&&?????????? BASETODO', this.baseTodoDTO);
    console.log('//&&&///&&&?????????? ID', this.todo.id);
    // now call service update mehtod
    this.todoService.updateTodo(String(this.todo.id), this.baseTodoDTO).subscribe();
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {

  }
}
