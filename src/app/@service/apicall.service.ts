import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getMethod(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
