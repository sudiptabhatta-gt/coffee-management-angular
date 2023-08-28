import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://192.168.71.100:30800/register/' 

  // inject HttpClient using the constructor as follows:
  constructor(private httpClient: HttpClient) { }

  // call api and save the data to the server  
  registrationFormSubmitData(data:any): Observable<any>{
    // console.log(data)
    return this.httpClient.post<any>(this.url, data)
  }

}
