import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class IpService {

  constructor(private http: HttpClient) { }


  getIpInfo(ip?: string): Observable<any> {
    if (ip) {
      return this.http.get('https://ipapi.co/' + ip + '/json/');
    } else {
      return this.http.get('https://ipapi.co/json/');
    }
  }

}
