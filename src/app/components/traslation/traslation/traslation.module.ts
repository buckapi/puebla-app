import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraslationRoutingModule } from './traslation-routing.module';
import { TraslationComponent } from './traslation.component';


@NgModule({
  declarations: [
    TraslationComponent
  ],
  imports: [
    CommonModule,
    TraslationRoutingModule
  ]
})
export class TraslationModule { }
