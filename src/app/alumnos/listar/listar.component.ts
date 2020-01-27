import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../modelos/alumno.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {
  file;

  constructor(private alumno: AlumnoService) { }

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


