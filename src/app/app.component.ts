import { Component, AfterViewInit } from '@angular/core';
import { PACKS } from './services/packs.service';
import { CATEGORIES } from './services/categories.service';
import { ScriptService } from './services/script.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'pueblapp';
  packs:any;
  categories:any;
  constructor(
    public script:ScriptService
  ) {
    this.packs=PACKS
    this.categories=CATEGORIES
    this.script.load(
    'jquery', 
    'popper',
    'bootstrap',
    'slick',
    'jquery-zoom',
    'isotope', 
    'quill-core', 
    'quill',
    'chosen',
    'datetimepicker', 
    'venobox',
    'waypoints', 
    'main'
           )
  }

  ngAfterViewInit() {
    // Método ngAfterViewInit que se ejecuta después de que la vista se haya inicializado
  }
}
