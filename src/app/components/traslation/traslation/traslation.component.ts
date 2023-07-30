import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PACKS } from '@app/services/packs.service';
import { CATEGORIES } from '@app/services/categories.service';
import { Yeoman } from '@app/services/yeoman.service';

import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-traslation',
  templateUrl: './traslation.component.html',
  styleUrls: ['./traslation.component.css']
})
export class TraslationComponent implements OnInit {
  isMobile:any;
  packs:any;
  categories:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;
 
  constructor(
    private deviceService: DeviceDetectorService,
    private router:Router,
    public yeoman:Yeoman
  ) { 
  
    this.packs=PACKS
    this.categories=CATEGORIES
  }

  setPreview(index:any){
    this.yeoman.preview=this.packs[index];
    this.yeoman.type="pack";
    this.router.navigate(['/packs']);
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
  }

}
