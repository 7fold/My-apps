import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { UrlComponent } from './url/url.component';
import { AddNewUrlComponent } from './add-new-url/add-new-url.component';
import { NewUrlDetailsComponent } from './new-url-details/new-url-details.component';
import { IpDetailedComponent } from './ip-detailed/ip-detailed.component';
import { HeadersComponent } from './headers/headers.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { IpDetCustomComponent } from './ip-det-custom/ip-det-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UrlComponent,
    AddNewUrlComponent,
    NewUrlDetailsComponent,
    IpDetailedComponent,
    HeadersComponent,
    TimestampComponent,
    IpDetCustomComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'url', component: UrlComponent },
      { path: 'url/add-new', component: AddNewUrlComponent },
      { path: 'url/details/:id', component: NewUrlDetailsComponent },
      { path: 'ip', component: IpDetailedComponent },
      { path: 'ip/:ip', component: IpDetCustomComponent },
      { path: 'headers', component: HeadersComponent },
      { path: 'time', component: TimestampComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
