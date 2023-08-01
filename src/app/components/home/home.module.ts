import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthRESTService } from '@app/services/authREST.service';
import { FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers:[HttpClient,AuthRESTService]
})
export class HomeModule { }
