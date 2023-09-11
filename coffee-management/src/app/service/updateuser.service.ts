import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {

  constructor(private httpClient: HttpClient) { }

  updateFormSubmitData(data:any):Observable<any>{

    const url = `http://127.0.0.1:8000/userupdate/${data.id}/`

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Accept': 'application/json' 
    });
      
    const options = {
        headers: headers
      
    }

    return this.httpClient.put<any>(url, data, options)
    // console.log(data.id)

  }
}
