import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraslationComponent } from './traslation.component';

const routes: Routes = [{ path: '', component: TraslationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraslationRoutingModule { }
