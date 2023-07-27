import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRESTService } from '@app/services/authREST.service';
import { PACKS } from '@app/services/packs.service';
import { Yeoman } from '@app/services/yeoman.service';

import { UserInterface } from '@app/interfaces/user-interface';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements  AfterViewInit {
  viewFlag:any=0;
  packs:any;
  users: UserInterface[] = [];
  bookings: any[] = [];
  currentUser: any; // Declara una variable para almacenar los datos del usuario

  constructor(
    private authRESTService: AuthRESTService, 
    private router: Router, 
    public yeoman:Yeoman
    ) {
      this.getAllBookings();
    this.packs=PACKS;
    const currentUser = this.authRESTService.getCurrentUser();
    if (currentUser) {
      // Si hay un usuario registrado, puedes acceder a sus datos aquí
      console.log('Usuario registrador:', yeoman.userType);
      
  this.yeoman.currentUser=currentUser;

  console.log("EMAIL:" +this.yeoman.email)
 
      // Resto del código que desees realizar con los datos del usuario...
  
    } else {
      // Si no hay un usuario registrado, redirigir a "/site"
      // this.router.navigate(['/site']);
      // this.yeoman.isLogged=false;
    }

   }
   getAllUsers(): void {
    this.authRESTService.getAllUsers().subscribe(
      (users) => {
        // Aquí recibes el array de usuarios desde la API
        this.users = users;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
   getAllBookings(): void {
    this.authRESTService.getAllBookings().subscribe(
      (bookings) => {
        // Aquí recibes el array de bookings desde la API
        this.bookings = bookings;
        this.yeoman.bookings=bookings;
        console.log("bookings"+this.bookings);
      },
      (error) => {
        console.error('Error al obtener los bookings:', error);
      }
    );
  }
  setView(valor:any){
    let flag=valor;
    if(flag=='package'){this.viewFlag=1;}

    if(flag=='booking'){this.viewFlag=2;}
    
  }
ngAfterViewInit(): void {
  if(!this.yeoman.isLogged){
    this.router.navigate(['site'])
  }
  this.getAllBookings();
  this.authRESTService.getCurrentUser() ;
  if(this.yeoman.currentUser?.email==='admin@email.com'){
    this.yeoman.email=this.yeoman.currentUser?.email;
  // this.yeoman.userType='admin';
     this.getAllUsers();
  }

  if(this.yeoman.currentUser?.email!=='admin@email.com'){
    // this.yeoman.userType='customer';    
    // this.currentUser = this.authRESTService.getBookingsByUserEmail(this.yeoman.currentUser.email);
 
  }
}
  ngOnInit(): void {
    // Verificar si hay un usuario registrado en el localStorage
   
  }
}
