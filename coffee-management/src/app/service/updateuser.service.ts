import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {

  constructor(private httpClient: HttpClient) { }

  updateFormSubmitData(data:any){

    const url = `http://192.168.71.100:30800/userupdate/${data.id}/`

    return this.httpClient.put<any>(url, data)
    // console.log(data.id)

  }
}
