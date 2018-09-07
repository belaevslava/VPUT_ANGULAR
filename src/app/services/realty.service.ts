import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Realty } from '../classes/realty';
import { City } from '../classes/city';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class RealtyService {
    private API_URL = environment.API_URL;
    private API_VERSION = environment.API_VERSION;
    private realtyUrl =  `${this.API_URL}v${this.API_VERSION}/realty`;  // URL to web api

    constructor(
        private http: HttpClient) { }

    /** GET realty from the server */
    getRealty(): Observable<Realty[]> {
        return this.http.get<Realty[]>(this.realtyUrl)
            .pipe(
                catchError(this.handleError('getRealty', []))
            );
    }

    /** GET latest realty from the server */
    getLatestRealty(): Observable<Realty[]> {
        const url = `${this.realtyUrl}/latest`;
        return this.http.get<Realty[]>(url)
            .pipe(
                catchError(this.handleError('getLatestRealty', []))
            );
    }

    /** GET best realty from the server */
    getBestRealty(): Observable<Realty[]> {
        const url = `${this.realtyUrl}/best`;
        return this.http.get<Realty[]>(url)
            .pipe(
                catchError(this.handleError('getBestRealty', []))
            );
    }

    /** GET realty cities from the server */
    getRealtyCities(): Observable<City[]> {
        const url = `${this.realtyUrl}/cities/`;
        return this.http.get<City[]>(url)
            .pipe(
                catchError(this.handleError('getRealtyCities', []))
            );
    }

    /** GET realtyItem by id. Return `undefined` when id not found */
    getRealtyItemNo404<Data>(id: number): Observable<Realty> {
        const url = `${this.realtyUrl}/?id=${id}`;
        return this.http.get<Realty[]>(url)
            .pipe(
                map(realty => realty[0]), // returns a {0|1} element array
                catchError(this.handleError<Realty>(`getRealtyItem id=${id}`))
            );
    }

    /** GET realtyItem by id. Will 404 if id not found */
    getRealtyItem(id: number): Observable<Realty> {
        const url = `${this.realtyUrl}/item/${id}/`;
        return this.http.get<Realty>(url).pipe(
            catchError(this.handleError<Realty>(`getRealtyItem id=${id}`))
        );
    }

    /* GET realty whose name contains search term */
    searchRealty(term: string): Observable<Realty[]> {
        if (!term.trim()) {
            // if not search term, return empty realtyItem array.
            return of([]);
        }
        return this.http.get<Realty[]>(`${this.realtyUrl}/?name=${term}`).pipe(
            catchError(this.handleError<Realty[]>('searchHeroes', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new realtyItem to the server */
    addRealty (realtyItem: Object): Observable<Realty> {
        return this.http.post<Realty>(this.realtyUrl, realtyItem, httpOptions).pipe(
            catchError(this.handleError<Realty>('addHero'))
        );
    }

    /** PUT: update the realtyItem on the server */
    updateRealty (realtyItem: Realty): Observable<any> {
        return this.http.put(this.realtyUrl, realtyItem, httpOptions).pipe(
            catchError(this.handleError<any>('updateHero'))
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