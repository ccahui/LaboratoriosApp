import { Injectable } from '@angular/core';
import { delay, tap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Usuario, Role } from '../modelos/usuario.models';
import { menuAlumno, menuAdmin, menuDocente } from '../modelos/roles.menus';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  usuario: Usuario;
  menu: any[] = [];
  token: string;

  redirectUrl = '';

  constructor(private router: Router) {
    this.cargarInfoStorage();
    this.menu = this.getMenu(this.usuario.role);
  }

  login(): Observable<boolean> {
    const usuario: Usuario = {
      email: 'kccahui@unsa.edu.pe',
      role: this.randomRole()
    };
    // tslint:disable-next-line:max-line-length
    return of({ login: true, usuario, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o' }).pipe(
      delay(100),
      tap(object => {
        this.isLoggedIn = true;
        this.menu = this.getMenu(object.usuario.role);
        this.usuario = object.usuario;
        this.token = object.token;
        this.almacenarInfoStorage();
      }),
      map(object => object.login)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.usuario = {};
    this.menu = [];
    this.token = '';
    this.cleanInfoStorage();
    this.router.navigate(['/login']);
  }

  almacenarInfoStorage() {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    localStorage.setItem('token', this.token);
  }

  cargarInfoStorage() {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    this.usuario = JSON.parse(localStorage.getItem('usuario')) || {};
    this.token = localStorage.getItem('token') || '';
  }

  cleanInfoStorage() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }

  private randomRole(): Role {

    switch (this.randomBetween(1, 3)) {
      case 1:
        return Role.admin;

      case 2:
        return Role.alumno;

      case 3:
        return Role.profesor;

      default:
        return Role.alumno;
    }
  }
  private randomBetween(inicio: number, fin: number) {
    const data = Math.floor(Math.random() * fin) + inicio;
    console.log(data);
    return data;
  }
  private getMenu(role: Role): any[] {
    switch (role) {
      case Role.admin:
        return menuAdmin;

      case Role.alumno:
        return menuAlumno;

      case Role.profesor:
        return menuDocente;

      default:
        return [];
    }
  }

}
