import {Component, OnInit} from '@angular/core';
import {Url} from 'url';
import {UrlService} from '../url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css'],
  providers: [UrlService]
})
export class UrlComponent implements OnInit {

  constructor(private urlService: UrlService) {

  }

  urls: Url[];

  getUrlData(){
    this.urlService.getAllUrls().subscribe(allData => {
      this.urls = allData
    }, error => console.log(error))
  }

  delete(id) {
    let ans = confirm("Do you want to delete and url with ID: " + id);

    if (ans) {
      this.urlService.deleteUrl(id).subscribe();
      setTimeout(()=>{
        this.getUrlData();
      }, 500);

    }
  }

  ngOnInit(){
    this.getUrlData();
  }

}
