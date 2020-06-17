import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';
import { Observable, of, pipe} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {BaseTodoDTO} from './baseTodoDTO';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly todosUrl = 'http://localhost:8080/todo-service-1.0-SNAPSHOT/api/todos'; // URL to web api (JBoss)

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  public updateTodo(id: string, baseTodoDTO: BaseTodoDTO) {
    return this.http.put<void>(`${this.todosUrl}/${id}`, baseTodoDTO, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(
        catchError(this.handleError('updateTodos'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
