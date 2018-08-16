import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Timestamp} from "./timestamp";

@Injectable()
export class TimestampService {

  constructor(private _http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }

  // getTimestamp(date?: number): Observable<any> {
  //   if (date){
  //     return this._http.get(this.baseUrl + 'api/time/?' + date)
  //   } else {
  //     return this._http.get(this.baseUrl + 'api/time')
  //   }
  // }

  getTimestamp(): Observable<any> {
      return this._http.get<Timestamp>(this.baseUrl + 'api/time')
  }

}
