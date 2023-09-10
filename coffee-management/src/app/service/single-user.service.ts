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
    return this.httpClient.get(`http://192.168.71.100:30800/singleuser/${id}`, this.requestOptions)
  }
}
