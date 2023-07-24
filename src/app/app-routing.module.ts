import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/site', pathMatch:'full'},
 { path: 'site', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'guided', loadChildren: () => import('./components/guided/guided.module').then(m => m.GuidedModule) },
  { path: 'travel', loadChildren: () => import('./components/travel/travel.module').then(m => m.TravelModule) },
  { path: 'packs', loadChildren: () => import('./components/packs/packs.module').then(m => m.PacksModule) },
  { path: 'traslation', loadChildren: () => import('./components/traslation/traslation/traslation.module').then(m => m.TraslationModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
