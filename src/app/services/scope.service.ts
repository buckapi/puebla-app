import { Injectable } from '@angular/core';
// import { AnyObject } from 'chart.js/types/basic';

@Injectable({
  providedIn: 'root'
})
export class Scope {
    packs:any={};
    packageServices:any={};
    
    stringV:string="";
    numbeVr:number=1;
    booleanV:boolean=false;
    arrayV$:any={};
    arrayM:any[]=[];
    constructor() { }
}