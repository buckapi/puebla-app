import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  isLoaded:Boolean=false;
  virtualRoute:string="first";
  categorySelected:string="first";
  products:any=[];
  bookingsByUser:any=[];
  preview:any={};
  phone:any;
  categories:any={};
  currentUser:any;
  constructor() { }
}