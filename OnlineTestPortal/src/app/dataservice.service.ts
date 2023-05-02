import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  headers!: HttpHeaders;
  constructor(private http : HttpClient) { 
    this.headers = new HttpHeaders().set('content-type','application/json');
  }

  getQuiz(): Observable<any>{
    console.log("flow 1 - from getQuiz() method in service");
    return this.http.get<any[]>('api/quiz');
  }

  checkLogin(user: User): Observable<boolean>{
    console.log('flow 5 - inside checkLogin() function in dataservice ' + " " + user);
    return this.http.post<boolean>('api/check-login', user);
  }


}
