import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { Router } from '@angular/router';
import { UserInterface } from '@app/interfaces/user-interface';
import { AuthRESTService } from '@app/services/authREST.service';
import { ScriptService } from '@app/services/script.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  name:string='';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  acceptTerms: boolean = false;
  loginError: string | null = null;
  showScrollUpButton = false;
  isMobile:any;

  constructor(
    public router:Router,
    public yeoman:Yeoman,
    public authRESTService:AuthRESTService,
    public script:ScriptService
    ) {
      this.checkIfMobile();
      window.addEventListener('resize', () => {
        this.checkIfMobile();
      });
  this.authRESTService.getCurrentUser();
 }
 checkIfMobile() {
  this.isMobile = window.innerWidth <= 767;
}

  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
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
  }
  ngOnInit(): void {
  }

}
