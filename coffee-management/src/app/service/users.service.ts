import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://127.0.0.1:8000/userlist/'


  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json' 
  });
    
  options = {
      headers: this.headers
    
  }

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.httpClient.get<any>(this.url, this.options)
  }
}
