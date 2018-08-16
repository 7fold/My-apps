import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UrlService} from '../url.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-url',
  templateUrl: './add-new-url.component.html',
  styleUrls: ['./add-new-url.component.css'],
  providers: [UrlService]
})
export class AddNewUrlComponent implements OnInit {



  constructor(private urlService: UrlService, public router: Router){

  }

  ngOnInit() {
    this.resetForm();
    this.urlService.getip();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
  }



  onSubmit(form: NgForm) {

    function isUrlValid(userInput) {
      let res = userInput.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      if(res == null)
        return false;
      else
        return true;
    }

    if (isUrlValid(form.value.Url)) {
      this.urlService.addUrl(form.value.Url).subscribe();
      setTimeout(()=>{
        this.router.navigate(['url/details', this.urlService.id]);
      }, 1000);
    } else {
      alert('Enter valid url');
    }
  }
}
