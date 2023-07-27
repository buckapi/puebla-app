import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my.component';

import { AuthRESTService } from '@app/services/authREST.service';
import { HttpClient ,HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    CommonModule,
    MyRoutingModule,
    HttpClientModule
  ], 
  providers:
    [HttpClient,
    AuthRESTService]
})
export class MyModule { }
