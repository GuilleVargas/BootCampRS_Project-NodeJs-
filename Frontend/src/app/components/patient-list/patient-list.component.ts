import { Patient } from './../models/patient';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import {MatSnackBar} from '@angular/material/snack-bar';




declare var M: any;

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit{

  patient: FormGroup;
  selected = 'x';
  constructor(public patientService: PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  this.patient = new FormGroup({
      nhc: new FormControl('',[Validators.required, Validators.maxLength(15)]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      second_surname: new FormControl(''),
      gender: new FormControl(''),
      birth_date: new FormControl(''),
      nif: new FormControl('',Validators.maxLength(9)),
      street: new FormControl(''),
      portal_number: new FormControl(''),
      door: new FormControl(''),
      postal_code: new FormControl('',Validators.maxLength(5)),
      city: new FormControl(''),
      tarjet_number: new FormControl(''),
      insurance_name: new FormControl(''),
      type_of_insurance: new FormControl('')
  })

    this.resetForm();
    this.refreshPatientList();
  }


  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.patientService.selectedPatient = {
      _id: "",
      nhc: null,
      name: "",
      surname: "",
      second_surname: "",
      gender: "",
      birth_date: "",
      nif: "",
      street: "",
      portal_number: null,
      door: "",
      postal_code: 0,
      city: "",
      tarjet_number: 0,
      insurance_name: "",
      type_of_insurance: ""
    }
  }

  onSubmit(form) {
    console.log(form.value)
    if (!form.value._id) {
      this.patientService.postPatient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPatientList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.patientService.putPatient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPatientList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshPatientList() {
    this.patientService.getPatientList().subscribe((res) => {
      this.patientService.patients = res as Patient[];
    });
  }

   onEdit(pat: Patient) {
     this.patientService.selectedPatient = pat;
   }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patientService.deletePatient(_id).subscribe((res) => {
        this.refreshPatientList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
