import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacksComponent } from './packs.component';

const routes: Routes = [{ path: '', component: PacksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacksRoutingModule { }
