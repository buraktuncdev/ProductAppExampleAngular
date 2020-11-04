import { Injectable } from '@angular/core';
import { from, throwError } from 'rxjs';
import { IProduct } from './product';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class ProductService {

    private productUrl = 'api/products/product.json';

    constructor(private http: HttpClient){
       /* this.getProducts().subscribe(
            success =>{

            },
            error => {

            }
            
        )*/
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
        
       
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }

}