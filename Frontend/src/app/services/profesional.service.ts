import { Profesional } from './../components/models/profesional';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  selectedProfesional: Profesional;
  profesional: Profesional[];
  
  readonly URL_API = 'http://localhost:3000/profesional';

  constructor(private httpClient: HttpClient) {  }

  postProfesional(prf: Profesional) {
    return this.httpClient.post(this.URL_API, prf);
  }

  getProfesionalList() {
    return this.httpClient.get(this.URL_API);
  }

  putProfesional(prf: Profesional) {
    return this.httpClient.put(this.URL_API + `/${prf._id}`, prf);
  }

  deleteProfesional(_id: string) {
    return this.httpClient.delete(this.URL_API + `/${_id}`);
  }
}