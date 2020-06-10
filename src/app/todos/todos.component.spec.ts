import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {TodoDetailModalComponent} from '../todo-detail-modal/todo-detail-modal.component';
import { TODOS } from '../mock-todos';
import { Todo } from '../todo';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TodoService} from '../todo.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';
import {NgbModalWindow} from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

class MockTodoService{
  public getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }
}

class MockNgbModal {
  public modalRef: {
    componentInstance: {
      todo: Todo
    }
  };
  public open(todo: Todo) {
    this.modalRef = {
      componentInstance: {
        todo
      }
    };
    console.log('=======', this.modalRef);
    return this.modalRef;
  }
}

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todo: Todo;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent,
                      TodoDetailModalComponent],
      providers: [
        {
          provide: TodoService,
          useClass: MockTodoService
        },
        {
          provide: NgbModal,
          useClass: MockNgbModal
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create modal with given todo', async(() => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card-body'));
    todo = TODOS[0];
    expect(cards.length).toBe(3);
    cards[0].triggerEventHandler('click', todo);
    const service = (fixture.componentInstance as any).modalService as MockNgbModal;
    expect(service.modalRef.componentInstance.todo).toEqual(todo);
  }));

  it('should return todos from the called TodoService', async(() => {
    component.getTodos();
    expect(component.todos).toEqual(TODOS);
  }));
});
