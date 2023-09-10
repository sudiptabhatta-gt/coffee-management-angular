import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  url = 'http://192.168.71.100:30800/register_user/'


  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json' 
  });
    
  options = {
      headers: this.headers
    
  }

  constructor(private httpClient: HttpClient) { }

  addFormSubmitData(data:any): Observable<any>{
    return this.httpClient.post<any>(this.url, data, this.options)
  }
  
}
