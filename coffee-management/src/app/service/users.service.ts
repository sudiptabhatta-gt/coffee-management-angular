import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://192.168.71.100:30800/userlist/'

  constructor(private httpClient: HttpClient) { }

  // private users$: Observable<Users[]>;

  getAllStudents(): Observable<any>{
    return this.httpClient.get<any>(this.url)
  }
}
