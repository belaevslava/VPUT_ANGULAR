import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Realty } from '../classes/realty';
import { environment } from '../../environments/environment';
import { RealtySearchResult } from '../classes/realty-search-result';

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
        return window['bestRealty'] ? window['bestRealty'] : this.http.get<Realty[]>(url)
            .pipe(
                catchError(this.handleError('getBestRealty', []))
            );
    }

    getRealtyList(ids: number[]): Observable<Realty[]> {
        const url = `${this.realtyUrl}/items/?ids=${ids.join(',')}`;
        return this.http.get<Realty[]>(url)
            .pipe(
                    catchError(this.handleError('getRealtyList', []))
            );
    }

    /** GET realty by id. Return `undefined` when id not found */
    getRealtyNo404<Data>(id: number): Observable<Realty> {
        const url = `${this.realtyUrl}/?id=${id}`;
        return this.http.get<Realty[]>(url)
            .pipe(
                map(realty => realty[0]), // returns a {0|1} element array
                catchError(this.handleError<Realty>(`getRealty id=${id}`))
            );
    }

    /** GET realty by id */
    getRealty (id: number): Observable<Realty> {
        const url = `${this.realtyUrl}/${id}`;
        return this.http.get<Realty>(url).pipe(
            catchError(this.handleError<Realty>(`getRealty id=${id}`))
        );
    }

    /** GET realty by search params */
    searchRealty (params: any = { page: 1 }): Observable<RealtySearchResult> {
        const url = `${this.realtyUrl}/search/?page=${params.page}`;
        return this.http.get<RealtySearchResult>(url).pipe(
            catchError(this.handleError<RealtySearchResult>('searchRealty'))
        );
    }
    //////// Save methods //////////

    /** POST: add a new realty to the server */
    addRealty (realty: Realty): Observable<Realty> {
        return this.http.post<Realty>(this.realtyUrl, realty, httpOptions).pipe(
            catchError(this.handleError<Realty>('addRealty'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteRealty (realty: Realty | number): Observable<Realty> {
        const id = typeof realty === 'number' ? realty : realty.id;
        const url = `${this.realtyUrl}/${id}`;

        return this.http.delete<Realty>(url, httpOptions).pipe(
            catchError(this.handleError<Realty>('deleteRealty'))
        );
    }

    /** PUT: update the realty on the server */
    updateRealty (realty: Realty): Observable<any> {
        return this.http.put(this.realtyUrl, realty, httpOptions).pipe(
            catchError(this.handleError<any>('updateRealty'))
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