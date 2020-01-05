import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
/*Funcionalidades y eventos internos */
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  login() {
    console.log('hola');
    this.auth.login().subscribe(() => {
      this.router.navigate([this.auth.redirectUrl]);
    });
  }


}
