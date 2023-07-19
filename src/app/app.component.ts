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
  isMobile:any;
  packs:any;
  categories:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;

  constructor(
    public script:ScriptService
  ) {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
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
  checkIfMobile() {
    this.isMobile = window.innerWidth <= 767;
  }
  ngAfterViewInit() {
   
    // Método ngAfterViewInit que se ejecuta después de que la vista se haya inicializado
  }
}
