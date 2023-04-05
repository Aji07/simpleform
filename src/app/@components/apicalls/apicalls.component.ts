import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.scss']
})
export class ApicallsComponent implements OnInit {

  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  public getMethod(){
     this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe((data) => {
      this.getJsonValue = data;
     });

    }

  public postMethod(){
   let body = {
      userId: 3,
      title: 'Hello',
      completed: true
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts', body).subscribe((data) => {this.postJsonValue = data});
  }
}
