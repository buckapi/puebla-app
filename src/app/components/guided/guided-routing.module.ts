import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidedComponent } from './guided.component';

const routes: Routes = [{ path: '', component: GuidedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedRoutingModule { }
