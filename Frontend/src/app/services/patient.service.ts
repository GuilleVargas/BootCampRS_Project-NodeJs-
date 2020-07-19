import { Patient } from './../components/models/patient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  selectedPatient: Patient;
  patients: Patient[];
  readonly URL_API = 'http://localhost:3000/patient';

  constructor(private httpClient: HttpClient) { }


    postPatient(pat: Patient) {
      return this.httpClient.post(this.URL_API, pat);
    }
  
    getPatientList() {
      return this.httpClient.get(this.URL_API);
    }
  
    putPatient(pat: Patient) {
      return this.httpClient.put(this.URL_API + `/${pat._id}`, pat);
    }
  
    deletePatient(_id: string) {
      return this.httpClient.delete(this.URL_API + `/${_id}`);
    }
 

  
}