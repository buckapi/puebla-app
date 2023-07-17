import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InfofakeService {
  info: any = [];
  constructor(private http: HttpClient) {
    this.loadInfofakeData();
  }

  loadInfofakeData(): Observable<any> {
    const gistId = 'd47846171b737abe78956f8dd31fb177'; // Reemplaza con el ID de tu Gist
    // const url = `https://api.github.com/gists/${gistId}`;
      const url = 'https://raw.githubusercontent.com/buckapi/infoFakeFoodapp/main/infoFake.json';
    return this.http.get<any>(url).pipe(
      map(data => {
        this.info = data;
        console.log(JSON.stringify(this.info));
        return data;
      })
    );
  }
}