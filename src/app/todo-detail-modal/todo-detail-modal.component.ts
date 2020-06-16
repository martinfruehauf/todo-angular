import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import { Todo } from '../todo';
import {BaseTodoDTO} from '../baseTodoDTO';

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

  constructor() {
    this.baseTodoDTO = {
      name: '',
      description: '',
      status: false,
      dueDate: null
    };
  }

  public save(){
    console.log('//&&&///&&& TODO', this.todo);
    console.log('//&&&///&&& BASETODO', this.baseTodoDTO);
    this.baseTodoDTO.name = this.name.nativeElement.value;
    this.baseTodoDTO.description = this.description.nativeElement.value;
    this.baseTodoDTO.status = this.status.nativeElement.checked;
    this.baseTodoDTO.dueDate = new Date(this.dueDate.nativeElement.value);
    console.log('//&&&///&&&?????????? BASETODO NAME', this.baseTodoDTO);
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {

  }
}
