import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { City } from '../classes/city';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CityService {
    private cityUrl = 'http://localhost:8000/v1/cities';

    constructor(private http: HttpClient) { }

    /** GET Bulgaria cities from the server */
    getCitiesByCountryAlias(countryAlias: string): Observable<City[]> {
        const url = `${this.cityUrl}/${countryAlias}`;
        return this.http.get<City[]>(url)
            .pipe(
                catchError(this.handleError('getCitiesOfBulgaria', []))
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