import {Component, Input, OnInit} from '@angular/core';

import {Todo} from '../todo';
import {BaseTodoDTO} from '../baseTodoDTO';
import {TodoService} from '../todo.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-detail-modal',
  templateUrl: './todo-detail-modal.component.html',
  styleUrls: ['./todo-detail-modal.component.css']
})
export class TodoDetailModalComponent implements OnInit {
  @Input() public todo: Todo;
  @Input() public baseTodoDTO: BaseTodoDTO;
  name: string;
  description: string;
  status: boolean;
  dueDate: Date;
  date: string;
  ngbTime: { hour: number, minute: number };
  ngbDate: NgbDateStruct;

  constructor(private todoService: TodoService) {
    this.baseTodoDTO = {
      name: '',
      description: '',
      status: false,
      dueDate: null
    };
  }

  public save() {
    this.baseTodoDTO.name = this.name;
    this.baseTodoDTO.description = this.description;
    this.baseTodoDTO.status = this.status;
    this.baseTodoDTO.dueDate = new Date(this.ngbDate.year,
      this.ngbDate.month - 1, this.ngbDate.day, this.ngbTime.hour, this.ngbTime.minute);
    if (this.todo.id) {
      this.todoService.updateTodo(this.todo.id, this.baseTodoDTO).subscribe();
    } else {
      this.todoService.addTodo(this.baseTodoDTO).subscribe();
    }
  }

  public delete() {
    this.todoService.deleteTodo(this.todo.id).subscribe();
  }

  ngOnInit(): void {
    this.name = this.todo.name;
    this.description = this.todo.description;
    this.status = this.todo.status;
    this.dueDate = this.todo.dueDate;
    if (this.todo.id) {
      const d = new Date(this.dueDate);
      this.ngbTime = {
        hour: d.getHours(),
        minute: d.getMinutes()
      };
      this.ngbDate = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
      };
    }
  }
}

