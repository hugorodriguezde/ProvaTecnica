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


  //GET tots els fotografs, limitem la resposta a 20 resultats
  getPhotographersList(url: string = this.url + `?limit=20`): Observable<Response>{
    return this.http.get<Response>(url);
  }
  //GET info de cada fotograf per la seva id
  getPhotographer(id:number): Observable<Photographer>{

    return this.http.get<Photographer>(this.url + id + '/');
  }
}
