import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: []
})
export class AlumnosComponent implements OnInit {

  file:any;
  constructor() { }

  ngOnInit() {
  }

  resetFile(){
    this.file = null;
  }
  cargarArchivoExcel(){
    console.log("Subiendo");
  }
  eliminar(){
    console.log("eliminar");
  }

}
