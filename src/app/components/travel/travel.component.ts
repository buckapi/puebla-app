import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { travel } from '@app/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travel:any;
  constructor(
    private router:Router,
    public yeoman:Yeoman
  ) { 
    this.travel=travel
  }

  ngOnInit(): void {
  }

}
