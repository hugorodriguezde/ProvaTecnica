import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response.interface';
import { Observable, map } from 'rxjs';
import { Photographer } from '../interfaces/photographer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url:string = `https://inphototest.app2u.es/api/photographer/`

  private createAuthorizationHeader(): HttpHeaders {
    const credentials = btoa('test@gmail.com' + ':' + `1234`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`
    });
    return headers;
  }

  //GET tots els fotografs, limitem la resposta a 20 resultats
  getPhotographersList(url: string = this.url + `?limit=20`): Observable<Response>{
    const options = {
      headers: this.createAuthorizationHeader()
    };
    return this.http.get<Response>(url, options);
  }
  //GET info de cada fotograf per la seva id
  getPhotographer(id:number): Observable<Photographer>{
    const options = {
      headers: this.createAuthorizationHeader()
    };
    return this.http.get<Photographer>(this.url + id + '/', options);
  }
}
