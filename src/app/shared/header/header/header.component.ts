import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { Router } from '@angular/router';
import { AuthRESTService } from '@app/services/authREST.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,
    public yeoman:Yeoman
,public authRESTService:AuthRESTService  ) {

  this.authRESTService.getCurrentUser();
 }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  logOut(){
    this.authRESTService.logoutUser();
    this.yeoman.isLogged=false;
    this.router.navigate(['/site']);
  }
  ngOnInit(): void {
  }

}
