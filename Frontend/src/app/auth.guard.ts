import { Injectable } from '@angular/core';
//Con el CanActivate vamos a seleccionar como el usuario va a tener permisos para navegar dentro
import { CanActivate } from '@angular/router'; 
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { /*AuthGuar es una manera de proteger las rutas desde el Front,
viendo si exites un token o no*/

  constructor(private authService: AuthService,
    private router: Router){}

  canActivate(): boolean{
    if (this.authService.loggedIn()){
      return true;                      //Si existe pues devuelve un T y muestra la ruta
    }
    this.router.navigate(['/signin']);
    return false;                       //Si no existe pues muestra de nuevo el login
  }
  
}