import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {

  file;
  constructor() { }

  ngOnInit() {
  }
  eliminar() {
    console.log('Eliminado');
  }
  cargarArchivoExcel() {
    console.log('Archivo Excel ...');
  }
  resetFile() {
    this.file = '';
    console.log('Reset File');
  }
}
