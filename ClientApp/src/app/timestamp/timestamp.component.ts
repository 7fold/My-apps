import { Component, OnInit } from '@angular/core';
import {TimestampService} from "../timestamp.service";
import {Timestamp} from "../timestamp";

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css'],
  providers: [TimestampService]
})
export class TimestampComponent implements OnInit {

  constructor(private timestampService: TimestampService) { }

  ngOnInit() {
    this.getTime();

  }

  data: Timestamp;

  getTime(){
      this.timestampService.getTimestamp().subscribe(resData => {
        this.data = resData;
      }, error => console.log(error))
  }
}
