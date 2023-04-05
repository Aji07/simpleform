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
  }

  public getMethod(){
     this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      this.getJsonValue = data;
     });

    }

}
