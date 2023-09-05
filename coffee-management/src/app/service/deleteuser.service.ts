import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private httpClient: HttpClient) { }

  deleteRecord(id:number){
    const url = `http://192.168.71.100:30800/userdelete/${id}/`

    return this.httpClient.delete<any>(url)
  }
}
