import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {TestBean} from './test-bean';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://api.deng.chen09.xyz/test';

  constructor(private httpClient: HttpClient) {
  }

  getTest(): Observable<TestBean> {
    return this.httpClient.get<TestBean>(this.apiUrl);
  }
}
