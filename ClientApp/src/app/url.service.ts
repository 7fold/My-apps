import {Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Url} from "url";

@Injectable()
export class UrlService {

  constructor(public _http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }

  getAllUrls(): Observable<any> {
    return this._http.get<Url>(this.baseUrl + 'api/Short/Index');
  }

  deleteUrl(id): Observable<any> {
    return this._http.delete(this.baseUrl + 'api/Short/Delete/' + id);
  }

  public id: string;
  public ipaddress: string;


  getip(){
    this._http.get('https://api.ipify.org?format=json').subscribe(ipdata => {
      this.ipaddress = ipdata['ip'];
    }, error => console.log(error));
  }


  addUrl(data): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    function makeid() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    this.id = makeid();

    let url = 'url='+data+'&id='+this.id+'&ip='+this.ipaddress;

    return this._http.post(this.baseUrl + 'api/Short/Create/', url,  { headers });
  }


  getdata(id): Observable<any> {
    return this._http.get<Url>(this.baseUrl + 'api/Short/Details/' + id);
  }
}
