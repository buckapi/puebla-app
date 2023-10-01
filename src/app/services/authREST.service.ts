import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable }  from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { UserInterface } from '@interfaces/user-interface';
import { Yeoman } from './yeoman.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthRESTService {
  private apiBaseUrl = 'https://db.guidedtravelmx.com:9018/api'; // URL base de la API

  constructor(private http: HttpClient,public yeoman:Yeoman) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  getBookingsByUserEmail(email: string): Observable<any[]> {
    const url = `${this.apiBaseUrl}/branchs?filter[where][email]=${email}`;
    const accessToken = this.getToken();
  
    if (accessToken) {
      this.headers = this.headers.set('Authorization', accessToken);
    }
  
    return this.http.get<any[]>(url, { headers: this.headers }).pipe(
      tap((data) => {
        this.yeoman.bookingsByUser = data;
      })
    );
  }
  getAllUsersB(): Observable<UserInterface[]> {
    const url = `${this.apiBaseUrl}/Users`;
    return this.http.get<UserInterface[]>(url, { headers: this.headers })
      .pipe(map(data => data));
  }

  getAllUsers(): Observable<UserInterface[]> {
    const url = `${this.apiBaseUrl}/Users`;
    const accessToken = this.getToken(); // Obtener el token de acceso del localStorage

    if (accessToken) {
      this.headers = this.headers.set('Authorization', accessToken); // Agregar el token en los encabezados
    }

    return this.http.get<UserInterface[]>(url, { headers: this.headers })
      .pipe(map(data => data));
  }


 registerUser(email: string, password: string, name: string): Observable<UserInterface> {
    const url = `${this.apiBaseUrl}/Users`;
    return this.http.post<UserInterface>(url, { email, password, name }, { headers: this.headers })
      .pipe(map(data => data));
  }
  deleteAllBranches(): Observable<any> {
    const url = `${this.apiBaseUrl}/branchs`;
    return this.http.delete<any>(url, { headers: this.headers })
      .pipe(map(data => data));
  }

  getAllBookings(): Observable<any[]> {
    const url = `${this.apiBaseUrl}/branchs`;
    return this.http.get<any[]>(url, { headers: this.headers })
      .pipe(map(data => data));
  }

  createBooking(name: string, email: string, pack: string,type: string, phone: string): Observable<any> {
    const url = `${this.apiBaseUrl}/branchs`;
    const bookingData = { name, email, pack,type,phone}; // Datos para el nuevo documento en /booking
    
    return this.http.post<any>(url, bookingData, { headers: this.headers })
      .pipe(map(data => data));
  }
  
  loginUser(email: string, password: string): Observable<UserInterface> {
    const url = `${this.apiBaseUrl}/Users/login?include=user`;
    return this.http.post<UserInterface>(url, { email, password }, { headers: this.headers })
      .pipe(map(data => data));
  }
    

  setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token: any): void {
    localStorage.setItem("accessToken", token);
  }

  getUserd(): string | null {
    return localStorage.getItem("userd");
  }

  getToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): UserInterface | null {
    let user_string = localStorage.getItem("currentUser");
    if (user_string) {
      let user: UserInterface = JSON.parse(user_string);
      // this.yeoman.currentUser=user;
      // this.yeoman.email=user.email;
      console.log("maili: "+this.yeoman.email)
        
      if(user.email==='undefined'){
        // this.yeoman.userType='admin';
        console.log("userType: "+this.yeoman.userType)
        this.yeoman.isLogged=true;
          //  this.getAllUsers();
        }
      
        if(user.email!=='undefined'){
          // this.yeoman.userType='admin';
          // this.yeoman.userType='customer';    
          // this.currentUser = this.authRESTService.getBookingsByUserEmail(this.yeoman.currentUser.email);
       
        }
        this.yeoman.isLogged=true;
      return user;
    } else {
      return null;
      this.yeoman.isLogged=false;
    }
  }

  logoutUser(): Observable<UserInterface> {
    let accessToken = localStorage.getItem('accessToken');
    const url = `${this.apiBaseUrl}/users/logout?access_token=${accessToken}`;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userd');
    localStorage.removeItem('nOrder');
    localStorage.removeItem('isLoggedin');
    this.yeoman.isLogged=false;
    this.yeoman.userType="";
    return this.http.post<UserInterface>(url, { headers: this.headers });
  }
}
