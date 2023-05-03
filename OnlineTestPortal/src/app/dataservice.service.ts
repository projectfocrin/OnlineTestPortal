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
    // This line initializes an instance of the HttpHeaders class and sets the content-type header to application/json.
    // The content-type header specifies the format of the request payload. 
    //  In this case, it is set to application/json which means that the payload is in JSON format. 
    // The content-type header specifies the format of the request payload. In this case, it is set to application/json which means that the payload is in JSON format. 
    // However, you can set the content-type header to other formats such as text/plain or application/xml if you are sending data in those formats.
    // The content-type header specifies the format of the request payload. It is used to indicate the format of the data that is being sent in the request body. This is important because the server needs to know how to parse the data that is being sent.
    // The default content-type for an HTTP POST request in Angular is text/plain. However, it is recommended to set the content-type header to the appropriate value for the data that is being sent in the request body. 
    // This is important because the server needs to know how to parse the data that is being sent. 
    // If you are sending JSON data, then you should set the content-type header to application/json. 
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
