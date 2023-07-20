import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PACKS } from '@app/services/packs.service';
import { CATEGORIES } from '@app/services/categories.service';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  title = 'pueblapp';
  isMobile:any;
  packs:any;
  categories:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;

  constructor(
    public script:ScriptService,
    public yeoman:Yeoman
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

  ngAfterViewInit(): void {
  }

}
