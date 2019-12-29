import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { IContact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class CotactsService {

  constructor(private httpClient: HttpClient) { }

  getAllContacts(): Observable<IContact[]> {
    // const subject = new Subject<IContact[]>(); 
    return this.httpClient.get<IContact[]>(environment.apiUrl).pipe(
      tap(data=> console.log('Data from API: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occuredd: ${err.error.message}`;
    } else {
      errorMessage = `Return Code: ${err.status}, Description: ${err.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
