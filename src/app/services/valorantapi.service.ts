import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class valorantapiService {
  private url: string = 'https://valorant-api.com/v1/';

  constructor(private http: HttpClient) {}

  getData(endPoint: string): Observable<any> {
    return this.http.get(this.url + endPoint);
  }
}
