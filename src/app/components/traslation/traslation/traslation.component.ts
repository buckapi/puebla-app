import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PACKS } from '@app/services/packs.service';
import { CATEGORIES } from '@app/services/categories.service';
import { Yeoman } from '@app/services/yeoman.service';
import { travel } from '@app/services/travel.service';
import { UserInterface } from '@app/interfaces/user-interface';
import { AuthRESTService } from '@app/services/authREST.service';

import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-traslation',
  templateUrl: './traslation.component.html',
  styleUrls: ['./traslation.component.css']
})
export class TraslationComponent implements OnInit {
  isMobile:any;
  packs:any;
  travel:any;
  categories:any;
  transportation:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;
  name:string='';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  acceptTerms: boolean = false;
  loginError: string | null = null;
 
  constructor(
    private deviceService: DeviceDetectorService,
    private router:Router,
    public yeoman:Yeoman,
    public authRESTService:AuthRESTService
  ) { 
  
    this.packs=PACKS
    this.categories=CATEGORIES
    this.travel=travel
  }

  setPreview(index:any){
    this.yeoman.preview=this.packs[index];
    this.yeoman.type="pack";
    this.router.navigate(['/packs']);
  }
  setTransportationPreview(index:any){
    this.yeoman.type="transportation";
    this.yeoman.preview=this.travel[index];
    this.router.navigate(['/packs']);
  }
  agregarUsuario() {
    // Datos del nuevo usuario a registrar
    const nuevoUsuario: UserInterface = {
      email: 'admin@email.com',
      password: 'admin1234'
    };

    // Llamada al método del servicio para registrar el usuario
    this.authRESTService.registerUser(nuevoUsuario.email!, nuevoUsuario.password!, nuevoUsuario.name!)
      .subscribe(
        (userData) => {
          // Aquí puedes manejar la respuesta de la API después de registrar el usuario exitosamente
          console.log('Usuario registrado:', userData);
          if (nuevoUsuario.email==='admin@email.com'){this.yeoman.userType='´admin'}
          if (nuevoUsuario.email!=='admin@email.com'){this.yeoman.userType='customer'}
        },
        (error) => {
          // Manejo de errores si la API devuelve algún error durante el registro
          console.error('Error al registrar el usuario:', error);
        }
      );
  }

  loginUser() {
    // Llama al método loginUser del servicio para realizar el inicio de sesión
    this.authRESTService.loginUser(this.email, this.password).subscribe(
      (userData) => {
        // Aquí puedes manejar la respuesta de la API después de iniciar sesión exitosamente
        this.loginError = '';
        console.log('Inicio de sesión exitoso:', userData);
  this.yeoman.email=this.email;
  console.log("maililili" +this.yeoman.email);
        if (this.email==='admin@email.com'){this.yeoman.userType='admin'}
        if (this.email!=='admin@email.com'){this.yeoman.userType='customer'}
        // Guardar los datos del usuario en el localStorage
        this.authRESTService.setUser(userData);
        const token = userData.id;
        this.authRESTService.setToken(token);
        
  this.router.navigate(['/my'])
        // Si deseas redirigir al usuario a otra página después del inicio de sesión, puedes hacerlo aquí.
      },
      (error) => {
        // Manejo de errores si la API devuelve algún error durante el inicio de sesión
        console.error('Error al iniciar sesión:', error);
        // Muestra un mensaje de error en caso de inicio de sesión fallido
        this.loginError = 'Credenciales inválidas. Por favor, verifica tu email y contraseña.';
      }
    );
  }
  

  login() {
    const email = 'usuario@example.com';
    const password = 'contrasena123';

    this.authRESTService.loginUser(email, password).subscribe(
      (userData) => {
        // Aquí puedes manejar la respuesta de la API después del inicio de sesión exitoso
        console.log('Usuario logueado:', userData);
        this.yeoman.isLogged=true;
        this.yeoman.email=email;
        this.yeoman.currentUser=userData;
      },
      (error) => {
        // Manejo de errores si la API devuelve algún error en el inicio de sesión
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
  registerUser() {
    if (this.acceptTerms) {
      // Llama al método registerUser del servicio para registrar el usuario
      this.authRESTService.registerUser(this.email, this.password,this.name).subscribe(
        (userData) => {
          // Aquí puedes manejar la respuesta de la API después de registrar el usuario exitosamente
          console.log('Usuario registrado:', userData);
          this.yeoman.email=this.email;
        },
        (error) => {
          // Manejo de errores si la API devuelve algún error durante el registro
          console.error('Error al registrar el usuario:', error);
        }
      );
    } else {
      // Mostrar mensaje de error o lógica para indicar que los términos deben ser aceptados
      console.log('Debes aceptar los términos y condiciones.');
    }
  }
  logOut(){
    this.authRESTService.logoutUser();
  }

  
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
  }

}
