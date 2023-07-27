import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacksRoutingModule } from './packs-routing.module';
import { PacksComponent } from './packs.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthRESTService } from '@app/services/authREST.service';

@NgModule({
  declarations: [
    PacksComponent
  ],
  imports: [
    CommonModule,
    PacksRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[HttpClient,AuthRESTService]
})
export class PacksModule { }
