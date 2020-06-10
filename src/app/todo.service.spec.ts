import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

describe('TodoService', () => {
  let client: HttpClient;
  let controller: HttpTestingController;
  let service: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TodoService,
      ]
    }).compileComponents();

    client = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodoService);
  });

  describe('get Customers', () => {
    it('should succeed', async () => {
      service.getTodos().subscribe(
        todos => expect(todos.length).toBe(3));
    });
    xit('should fail', async () => {
      service.getTodos().subscribe(
        _ => fail('should fail')
      );
    });
  });

  xdescribe('handleError', () => {
    it('should succeed', async () => {
      expect((service as any).handleError()).toBeFalsy();
    });
  });
});
