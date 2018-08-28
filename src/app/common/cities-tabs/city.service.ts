import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { City } from './city';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CityService {
    private apiUrl = {
        citiesOfBulgaria: 'api/citiesOfBulgaria',
        allCities: 'api/allCities',
    };

    constructor(private http: HttpClient) { }

    /** GET Bulgaria cities from the server */
    getCitiesOfBulgaria(): Observable<City[]> {
        return this.http.get<City[]>(this.apiUrl.citiesOfBulgaria)
            .pipe(
                catchError(this.handleError('getCitiesOfBulgaria', []))
            );
    }

    /** GET all cities from the server */
    getAllCities(): Observable<City[]> {
        return this.http.get<City[]>(this.apiUrl.allCities)
            .pipe(
                catchError(this.handleError('getAllCities', []))
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