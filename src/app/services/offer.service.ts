import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Offer } from '../classes/offer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class OfferService {

    private offersUrl = 'http://localhost:8000/v1/realties/';  // URL to web api

    constructor(
        private http: HttpClient) { }

    /** GET offers from the server */
    getOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(this.offersUrl)
            .pipe(
                catchError(this.handleError('getOffers', []))
            );
    }
    
    /** GET latest offers from the server */
    getLatestOffers(): Observable<Offer[]> {
        const url = `${this.offersUrl}latestRealties`;
        return this.http.get<Offer[]>(url)
            .pipe(
                catchError(this.handleError('getLatestOffers', []))
            );
    }

    /** GET best offers from the server */
    getBestOffers(): Observable<Offer[]> {
        const url = `${this.offersUrl}bestRealties`;
        return this.http.get<Offer[]>(url)
            .pipe(
                catchError(this.handleError('getBestOffers', []))
            );
    }

    /** GET offerItem by id. Return `undefined` when id not found */
    getOfferNo404<Data>(id: number): Observable<Offer> {
        const url = `${this.offersUrl}/?id=${id}`;
        return this.http.get<Offer[]>(url)
            .pipe(
                map(offers => offers[0]), // returns a {0|1} element array
                catchError(this.handleError<Offer>(`getOffer id=${id}`))
            );
    }

    /** GET offerItem by id. Will 404 if id not found */
    getOffer(id: number): Observable<Offer> {
        const url = `${this.offersUrl}${id}/show/`;
        return this.http.get<Offer>(url).pipe(
                catchError(this.handleError<Offer>(`getOffer id=${id}`))
            );
    }

    /* GET offers whose name contains search term */
    searchOffers(term: string): Observable<Offer[]> {
        if (!term.trim()) {
            // if not search term, return empty offerItem array.
            return of([]);
        }
        return this.http.get<Offer[]>(`${this.offersUrl}/?name=${term}`).pipe(
            catchError(this.handleError<Offer[]>('searchHeroes', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new offerItem to the server */
    addOffer (offerItem: Object): Observable<Offer> {
        return this.http.post<Offer>(this.offersUrl, offerItem, httpOptions).pipe(
            catchError(this.handleError<Offer>('addHero'))
        );
    }

    /** PUT: update the offerItem on the server */
    updateOffer (offerItem: Offer): Observable<any> {
        return this.http.put(this.offersUrl, offerItem, httpOptions).pipe(
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