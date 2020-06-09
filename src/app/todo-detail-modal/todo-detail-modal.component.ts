import { Component } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail-modal',
  templateUrl: './todo-detail-modal.component.html',
  styleUrls: ['./todo-detail-modal.component.css']
})
export class TodoDetailModalComponent {
  public todo: Todo;

  constructor() {}
}
