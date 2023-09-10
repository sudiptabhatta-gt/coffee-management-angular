import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleUserService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: this.headerDict
  };

  constructor(private httpClient: HttpClient) { }


  getUserbyId(id:any){
    return this.httpClient.get(`http://127.0.0.1:8000/singleuser/${id}`, this.requestOptions)
  }
}
