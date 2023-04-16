import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResult } from './user-result';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserResult> {
    return this.http.get<UserResult>(`https://randomuser.me/api/`);
  }

}
