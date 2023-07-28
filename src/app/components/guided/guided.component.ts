import { Component, AfterViewInit } from '@angular/core';
import { PACKS } from '@app/services/packs.service';
import { CATEGORIES } from '@app/services/categories.service';
import { Yeoman } from '@app/services/yeoman.service';
import { ScriptService } from '@app/services/script.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guided',
  templateUrl: './guided.component.html',
  styleUrls: ['./guided.component.css']
})
export class GuidedComponent implements AfterViewInit {
  title = 'pueblapp';
  isMobile:any;
  packs:any;
  categories:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;

  constructor(
    public yeoman:Yeoman,
    private router:Router
  ) {
   
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
    this.packs=PACKS
    this.categories=CATEGORIES
   }
   checkIfMobile() {
    this.isMobile = window.innerWidth <= 767;
   }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}
