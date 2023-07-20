import { Component, AfterViewInit } from '@angular/core';
import { Yeoman } from './services/yeoman.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'pueblapp';
 

  constructor(
    public yeoman:Yeoman
  ) {}
    setRoute(par:any){
      let parametro=par;
    this.yeoman.virtualRoute=parametro;
    }
  
  ngAfterViewInit() {
   
    // Método ngAfterViewInit que se ejecuta después de que la vista se haya inicializado
  }
}
