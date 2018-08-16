import { Component, OnInit } from '@angular/core';
import {Url} from '../url';
import {UrlService} from "../url.service";

@Component({
  selector: 'app-new-url-details',
  templateUrl: './new-url-details.component.html',
  styleUrls: ['./new-url-details.component.css'],
  providers: [UrlService]
})
export class NewUrlDetailsComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  public id: string;

  info: Url;

  ngOnInit() {
    this.id = window.location.pathname.split("/").pop();
    this.getData();
  }

  getData() {
    this.urlService.getdata(this.id).subscribe(urlData => this.info = urlData)
  }

}
