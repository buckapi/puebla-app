import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GuidedComponent } from './guided/guided.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthRESTService } from '@app/services/authREST.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule
  ],
  providers:[HttpClient,AuthRESTService]
})
export class HomeModule { }
