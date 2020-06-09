import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailModalComponent } from './todo-detail-modal.component';
import { Todo } from '../todo';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

describe('TodoDetailModalComponent', () => {
  let component: TodoDetailModalComponent;
  let fixture: ComponentFixture<TodoDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailModalComponent ]
    })
    .compileComponents();
  }));

  it('should have name "mock-todo 1"', () => {
    fixture = TestBed.createComponent(TodoDetailModalComponent);
    component = fixture.componentInstance;
    /*let modalService = fixture.debugElement.injector.get(NgbModal);*/
    fixture.detectChanges();
    expect(component.todo.name).toBe('mock-todo 1');
  });
});
