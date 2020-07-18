import { Profesional } from './../models/profesional';
import { Component, OnInit, Input } from '@angular/core';
import { ProfesionalService } from '../../services/profesional.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profesional-list',
  templateUrl: './profesional-list.component.html',
  styleUrls: ['./profesional-list.component.scss']
})
export class ProfesionalListComponent implements OnInit {

  constructor() { }

  @Input() profesional: Profesional; 

  ngOnInit() {
  }

 

}
