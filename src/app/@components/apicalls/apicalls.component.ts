import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/@service/apicall.service';

@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.scss']
})
export class ApicallsComponent implements OnInit {

  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient, private apicall: ApicallService) { }

  ngOnInit(): void {
    this.apicall.getMethod().subscribe((data) => {this.getJsonValue = data; console.log(data)});
    this.postMethod();
  }

  // public getMethod(){
  //    this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe((data) => {
  //     this.getJsonValue = data;
  //    });

  //   }

  public postMethod(){
   let body = {
      userId: 3,
      title: 'Test',
      completed: true
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts', body).subscribe((data) => {this.postJsonValue = data});
  }
}
