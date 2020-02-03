import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../modelos/response/alumno.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacionComponent, DataNotificacion } from 'src/app/compartir/notificacion/notificacion.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {
  file;

  constructor(private alumno: AlumnoService, private snackBar: MatSnackBar) { }

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

  openSnackBar(message: string, action: string) {

    const data: DataNotificacion = {
      tipo: 'error',
    };
    this.snackBar.openFromComponent(NotificacionComponent, {
      data
    });
  }
}


