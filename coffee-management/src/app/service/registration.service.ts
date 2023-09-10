import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://127.0.0.1:8000/register/' 

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json' 
  });
    
  options = {
      headers: this.headers
    
  }

  
  // inject HttpClient for post request using the constructor as follows:
  constructor(private httpClient: HttpClient) { }

  // call api and save the data to the server. this functions returns an obervable and it observable will be subscribed to by a component of the application and then show the values on the page
  registrationFormSubmitData(data:any): Observable<any>{
    // console.log(data)
    return this.httpClient.post<any>(this.url, data, this.options)
  }

}
