import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../modelos/alumno.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {


  file;
  alumnos$: Observable<Alumno[]>;

  constructor(private alumno: AlumnoService) { }

  ngOnInit() {
    this.alumnos$ = this.alumno.obtenerAlumnos().pipe(
      map(response => response.data)
    );
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

