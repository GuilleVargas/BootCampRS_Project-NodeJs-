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

  constructor(private http: HttpClient) {
    this.selectedProfesional = new Profesional();
  }

  postProfesional(profesional: Profesional) {
    return this.http.post(this.URL_API, profesional);
  }

  getProfesionals() {
    return this.http.get(this.URL_API);
  }

  putProfesional(profesional: Profesional) {
    return this.http.put(this.URL_API + `/${profesional._id}`, profesional);
  }

  deleteProfesional(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}