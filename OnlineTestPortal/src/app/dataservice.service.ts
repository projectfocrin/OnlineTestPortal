import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  headers!: HttpHeaders;
  constructor(private http : HttpClient) { 
    this.headers = new HttpHeaders().set('content-type','application/json');
  }

  getQuiz(): Observable<any>{
    return this.http.get<any[]>('api/quiz');
  }

  checkLogin(user: any): Observable<boolean>{
    console.log(user + 'inside checkLogin function in dataservice');
    return this.http.post<boolean>('api/check-login', user);
  }


}
