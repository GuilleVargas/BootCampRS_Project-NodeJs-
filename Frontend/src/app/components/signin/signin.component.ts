import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  user= {
    email:'',
    password:''
  }

  show: boolean;

  constructor( private authService: AuthService, private router: Router) { 
    this.show = false;
  }

  password() {
    this.show = !this.show;
}

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res=> {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profesional-list']);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  
}