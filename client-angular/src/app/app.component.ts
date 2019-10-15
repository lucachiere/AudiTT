import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api';
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('https://3000-d1602521-1d95-47e7-bfe7-71235d558926.ws-eu0.gitpod.io/api').subscribe(data => {
        this.results = data['results'];
      });
    }
}
