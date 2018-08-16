import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeadersService {

  constructor(private _http: HttpClient) { }

  getHeaders(): Observable<any> {
    return this._http.get('https://node.yuriy.ca/api/headers')
  }

}
