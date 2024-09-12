import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private router: Router){ }
  navegarLogin(){
    this.router.navigate(['/login']); //
  }

  ngOnInit() {
  }

}
