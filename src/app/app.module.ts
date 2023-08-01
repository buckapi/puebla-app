import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import { AuthRESTService } from '@app/services/authREST.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [HttpClientModule,AuthRESTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
