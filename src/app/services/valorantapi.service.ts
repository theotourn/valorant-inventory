import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class valorantapiService {

  constructor(private http: HttpClient) { }

  getSkinsData() : Observable<any> {
    return this.http.get('https://valorant-api.com/v1/weapons/skins');
  }
}
