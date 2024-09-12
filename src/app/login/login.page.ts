import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; 
  constructor(private router: Router) { }
  navegarHome(){
    this.router.navigate(['/home']); //Navegamos hacia la página de home
  }

  navegarReset(){
    this.router.navigate(['/reset-password']); //Navegamos hacia la página de reset
  }
  ngOnInit() {
  }

}
