import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: []
})


export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  eliminar() {
    console.log('Eliminado');
  }

}
