import { Component, OnInit } from '@angular/core';
import {HeadersService} from "../headers.service";

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
  providers: [HeadersService]
})
export class HeadersComponent implements OnInit {

  constructor(private headersService: HeadersService) { }

  ngOnInit() {
    this.getheaders();
  }

  public headers: any;

  objectKeys = Object.keys;

  getheaders(){
    this.headersService.getHeaders().subscribe(headData => this.headers = headData);
  }
}
