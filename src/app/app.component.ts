import { Component } from '@angular/core';
import {HttpService} from './http.service';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-demo1';
  constructor(private httpService: HttpService) {
  }

  click() {
    this.httpService.getTest().subscribe(
      data => {
        this.title = data.name;
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('done');
      }
    );
  }
}
