import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private httpClient: HttpClient) { }

  deleteRecord(id:number){
    const url = `http://127.0.0.1:8000/userdelete/${id}/`

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Accept': 'application/json' 
    });

    const options = {
      headers: headers
    
  }

    return this.httpClient.delete<any>(url, options)
  }
}
