import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Folder } from '../folder.class/folder';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})
export class FolderService {
  private foldersUrl = 'api/folders';  // URL to web api
  getFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.foldersUrl)
      .pipe(
        catchError(this.handleError('getFolders', []))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
