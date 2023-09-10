import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://192.168.71.100:30800/userlist/'


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
