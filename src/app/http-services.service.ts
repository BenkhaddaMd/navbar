import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http:HttpClient) { }
  private url = "http://dev.devarchi.fr:8080"
  postGategory(data){
    return  this.http.post(`${this.url}/api/gateway`, data);
  }
}
