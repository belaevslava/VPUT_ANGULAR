import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OfferItem } from './offer-item';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class OfferItemService {

    private offersUrl = 'https://api.vput.loc/?https://vput.ru/jsonGetRealtiesPage/?';  // URL to web api

    constructor(
        private http: HttpClient) { }

    /** GET offers from the server */
    getOffers(): Observable<OfferItem[]> {
        return this.http.get<OfferItem[]>(this.offersUrl)
            .pipe(
                catchError(this.handleError('getHeroes', []))
            );
    }

    /** GET offerItem by id. Return `undefined` when id not found */
    getOfferItemNo404<Data>(id: number): Observable<OfferItem> {
        const url = `${this.offersUrl}/?id=${id}`;
        return this.http.get<OfferItem[]>(url)
            .pipe(
                map(offers => offers[0]), // returns a {0|1} element array
                catchError(this.handleError<OfferItem>(`getHero id=${id}`))
            );
    }

    /** GET offerItem by id. Will 404 if id not found */
    getOfferItem(id: number): Observable<OfferItem> {
        const url = `${this.offersUrl}filters[id]=${id}`;
        return this.http.get<OfferItem>(url).pipe(
                catchError(this.handleError<OfferItem>(`getHero id=${id}`))
            );
    }

    /* GET offers whose name contains search term */
    searchOffers(term: string): Observable<OfferItem[]> {
        if (!term.trim()) {
            // if not search term, return empty offerItem array.
            return of([]);
        }
        return this.http.get<OfferItem[]>(`${this.offersUrl}/?name=${term}`).pipe(
            catchError(this.handleError<OfferItem[]>('searchHeroes', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new offerItem to the server */
    addOffer (offerItem: Object): Observable<OfferItem> {
        return this.http.post<OfferItem>(this.offersUrl, offerItem, httpOptions).pipe(
            catchError(this.handleError<OfferItem>('addHero'))
        );
    }

    /** PUT: update the offerItem on the server */
    updateOffer (offerItem: OfferItem): Observable<any> {
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