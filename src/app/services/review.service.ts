import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Review } from '../classes/review';

@Injectable({ providedIn: 'root' })

export class ReviewService {
    private apiUrl = {
        latestReviews: 'http://localhost:8000/v1/realties/latestReviews'
    };

    constructor(private http: HttpClient) { }

    /** GET latest reviews from the server */
    getLatestReviews(): Observable<Review[]> {
        return this.http.get<Review[]>(this.apiUrl.latestReviews)
            .pipe(
                catchError(this.handleError('getLatestReviews', []))
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