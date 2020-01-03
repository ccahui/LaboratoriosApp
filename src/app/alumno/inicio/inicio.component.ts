import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  file;
  constructor() { }

  ngOnInit() {
  }
  cargarConstancia(){
    console.log('Cargar Constancia');
  }
  resetFile(){
    console.log('Reset File');
    this.file = null;
  }

}
