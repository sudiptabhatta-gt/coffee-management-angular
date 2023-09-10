import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://192.168.71.100:30800/login/'

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json' 
  });
    
  options = {
      headers: this.headers
    
  }

  constructor(private httpClient: HttpClient) { }

  loginFormSubmitData(data:any): Observable<any>{
    // console.log(data)
    return this.httpClient.post<any>(this.url, data, this.options)
  }

}