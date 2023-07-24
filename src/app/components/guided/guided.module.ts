import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidedRoutingModule } from './guided-routing.module';
import { GuidedComponent } from './guided.component';


@NgModule({
  declarations: [
    GuidedComponent
  ],
  imports: [
    CommonModule,
    GuidedRoutingModule
  ]
})
export class GuidedModule { }
