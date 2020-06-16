import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailModalComponent } from './todo-detail-modal.component';
import { Todo } from '../todo';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TodosComponent} from '../todos/todos.component';

describe('TodoDetailModalComponent', () => {
  let component: TodoDetailModalComponent;
  let fixture: ComponentFixture<TodoDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('!!!!!! COMPONENT:', component);
    console.log('!!!');
    expect(component).toBeTruthy();
  });
});
