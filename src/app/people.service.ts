import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleUrl = 'api/people';

  constructor(private http: HttpClient) { }

  getPeople (): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  searchPeople(term: string): Observable<Person[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Person[]>(`${this.peopleUrl}/?name=${term}`);
  }

}
