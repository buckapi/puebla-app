import { Component, OnInit, ViewChild, ElementRef ,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PACKS } from '@app/services/packs.service';
import { CATEGORIES } from '@app/services/categories.service';
import { Yeoman } from '@app/services/yeoman.service';
import { AuthRESTService } from '@app/services/authREST.service';
import { HttpClient } from '@angular/common/http';

import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DeviceDetectorService } from 'ngx-device-detector';
declare var intlTelInput: any; 
@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit, AfterViewInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  @ViewChild('phoneInput', { static: true }) phoneInput!: ElementRef; // Obtén una referencia al elemento del teléfono en el formulario
  deviceInfo:any;
  menssage:string='';
  errorMenssage:boolean=false;
  name: string = '';
  phone:string='';
  email: string = '';
  password: string = '';
  sending:boolean=false;
  isMobile:any;
  packs:any;
  categories:any;
  isHovered: boolean = false;
  showDescription: boolean = false;
  showScrollUpButton = false;
  registrationForm: FormGroup;
  submitted: boolean = false;
  constructor(

    private formBuilder: FormBuilder,
    private deviceService: DeviceDetectorService,
    private authRESTService: AuthRESTService,
    private router:Router,
    public yeoman:Yeoman
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      phone: new FormControl('', [Validators.required])
    });
    this.epicFunction();
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
  
  request() {
    const phoneNumber = '+5212216482271';
    const message = `Hello, I want to book the package "${this.yeoman.preview.name}"`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
  }
  sendMessageToWhatsApp() {
    const phoneNumber = '+5212216482271';
    const message = `Hello, my name is ${this.name} (${this.email} )and I want to book the package "${this.yeoman.preview.name}"`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
  registerUserSug() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.errorMenssage=false;

     
      // Realizar acciones cuando el formulario es válido, por ejemplo, enviar los datos al servidor
      this.sending = true;
      // Llama al método registerUser del servicio para registrar al usuario
      this.authRESTService.registerUser(this.registrationForm.value.email, this.registrationForm.value.password, this.registrationForm.value.name).subscribe(
        (userData) => {
          // Aquí puedes manejar la respuesta de la API después de registrar al usuario exitosamente
          const message = `Usuario registrado exitosamente.\nNombre: ${this.name}\nEmail: ${this.yeoman.phone}`;
          // alert(message);
          this.sending = false;
          this.authRESTService.setUser(userData);
          // this.authRESTService.setToken(userData.id);
          // this.yeoman.currentUser.email=this.email;
          
          // this.authRESTService.setToken(token);
          // Llama al método createBooking del servicio para crear el nuevo documento en /booking
          if(this.yeoman.type=='pack'){this.yeoman.preview.type="pack";}
          if(this.yeoman.type=='transportation'){this.yeoman.preview.type="transportation";}
          this.authRESTService.createBooking(this.name, this.email, this.yeoman.preview.name,this.yeoman.preview.type, this.yeoman.phone/* phone */).subscribe(
            (bookingData) => {
              // Aquí puedes manejar la respuesta de la API después de crear el nuevo documento en /booking
              console.log('Nuevo documento creado en /booking:', bookingData);
              this.yeoman.userType='customer';
              this.yeoman.email=bookingData.email;
              this.authRESTService.getAllBookings().subscribe((data=>{
                this.yeoman.bookings=data;
                console.log("datica:  "+this.yeoman.bookings);
                this.router.navigate(['my'])
              }));
              
            },
            (error) => {
              // Manejo de errores si la API devuelve algún error durante la creación del documento en /booking
              console.error('Error al crear nuevo documento en /booking:', error);
            }
          );
  
          this.sendMessageToWhatsApp();
          // Si deseas redirigir al usuario a otra página después del registro, puedes hacerlo aquí.
        },
        (error) => {
          this.sending = false;
          // Manejo de errores si la API devuelve algún error durante el registro
          console.error('Error al registrar al usuario:', error);
        }
      );
      }

  registerUser() {
  
  }
  onDeleteAllBranches(): void {
    this.authRESTService.deleteAllBranches().subscribe(
      (data) => {
        console.log('Todas las sucursales han sido eliminadas:', data);
        // Aquí puedes realizar alguna acción adicional después de eliminar las sucursales, si lo deseas.
      },
      (error) => {
        console.error('Error al eliminar todas las sucursales:', error);
      }
    );
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo()!;
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);
    console.log(isTablet);
    console.log(isDesktopDevice);
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    if (this.yeoman.preview.name === undefined) {
      this.router.navigate(['']);
    }

    // Verifica si phoneInput.nativeElement está definido antes de utilizarlo
    if (this.phoneInput && this.phoneInput.nativeElement) {
      const phoneInput = intlTelInput(this.phoneInput.nativeElement, {
        separateDialCode: true,
        preferredCountries: ['us', 'gb', 'es'],
      });

      if (phoneInput.node) {
        phoneInput.node.addEventListener('countrychange', () => {
          this.yeoman.phone = phoneInput.getNumber();
          console.log('Número de teléfono con código de país:', this.yeoman.phone);
        });
      }
    }
  }
  ngOnInitF(): void {
    if(this.yeoman.preview.name===undefined){
      this.router.navigate(['']);
    }
    const phoneInput = intlTelInput(this.phoneInput.nativeElement, {
      separateDialCode: true,
      preferredCountries: ['us', 'gb', 'es'], // Puedes ajustar los países preferidos aquí
      // Puedes agregar más opciones según lo requieras
    });

    // Agrega un listener para obtener el número de teléfono seleccionado cuando cambie
    phoneInput.node.addEventListener('countrychange', () => {
      // Obtiene el número de teléfono seleccionado con el código de país
      this.yeoman.phone = phoneInput.getNumber();
      console.log('Número de teléfono con código de país:', this.yeoman.phone);
    });
  }
  

}
