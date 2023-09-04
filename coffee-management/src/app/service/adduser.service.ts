import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  url = 'http://192.168.71.100:30800/register_user/'

  constructor(private httpClient: HttpClient) { }

  addFormSubmitData(data:any): Observable<any>{
    return this.httpClient.post<any>(this.url, data)
  }
  
}
