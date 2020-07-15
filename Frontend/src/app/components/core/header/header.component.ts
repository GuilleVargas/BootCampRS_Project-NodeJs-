import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  mostrar = true;
  
  constructor(){}
  
  contacto =  {
    nombre: 'Hospital Universitario de Torrejón',
    telefono: '916 26 26 26',
    horario: 'Abierto 24 horas',
    direccion: 'Calle Mateo Inurria, s/n, 28850 Torrejón de Ardoz, Madrid'
  }; 
}
