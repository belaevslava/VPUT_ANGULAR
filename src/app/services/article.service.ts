import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Article} from '../classes/article';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private API_URL = environment.API_URL;
  private API_VERSION = environment.API_VERSION;
  private articleUrl =  `${this.API_URL}v${this.API_VERSION}/article`;  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET realty by id */
  getArticleById (id: number): Observable<Article> {
      const url = `${this.articleUrl}?id=${id}`;
      return this.http.get<Article>(url).pipe(
          catchError(this.handleError<Article>(`getArticleById id=${id}`))
      );
  }

  /** GET realty by id */
  getArticleByAlias (alias: string): Observable<Article> {
      const url = `${this.articleUrl}?alias=${alias}`;
      return this.http.get<Article>(url).pipe(
          catchError(this.handleError<Article>(`getArticleByAlias id=${alias}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }
}
