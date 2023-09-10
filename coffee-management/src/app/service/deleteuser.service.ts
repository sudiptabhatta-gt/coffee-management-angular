import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private httpClient: HttpClient) { }

  deleteRecord(id:number){
    const url = `http://192.168.71.100:30800/userdelete/${id}/`

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
