import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailModalComponent } from './todo-detail-modal.component';
import { Todo } from '../todo';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TodosComponent} from '../todos/todos.component';
import {TodoService} from '../todo.service';
import {Observable, of} from 'rxjs';
import {TODOS} from '../mock-todos';

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
    return this.modalRef;
  }
}

describe('TodoDetailModalComponent', () => {
  let component: TodoDetailModalComponent;
  let fixture: ComponentFixture<TodoDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailModalComponent],
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
    fixture = TestBed.createComponent(TodoDetailModalComponent);
    component = fixture.componentInstance;
    console.log('Created component Instance', component);
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('!!!!!! COMPONENT:', component);
    console.log('!!!!!!');
    expect(component).toBeTruthy();
  });
});
