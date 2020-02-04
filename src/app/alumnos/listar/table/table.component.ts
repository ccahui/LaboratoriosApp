import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { MatPaginator, MatDialog, DialogPosition } from '@angular/material';
import { Alumno, ResponseAlumnos } from '../../../modelos/response/alumno.models';
import { StatusResponse } from '../../../modelos/response/status.model';
import { map, switchMap, takeLast, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { ModalConfirmComponent } from 'src/app/compartir/modal-confirm/modal-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataNotificacion, NotificacionComponent } from '../../../compartir/notificacion/notificacion.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['cui', 'apellidos', 'nombre', 'tercio', 'autorizar', 'habilitado', 'accion'];
  dataSource: Alumno[];

  statusResponse: StatusResponse = { isLoading: true };
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private alumno: AlumnoService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerAlumnos().subscribe(data => this.dataSource = data, () => this.error());

    this.paginator.page.pipe(
      switchMap(() => this.obtenerAlumnos()))
      .subscribe(data => this.dataSource = data, () => this.error());
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    this.iniciarSolicitud();
    const page = this.pageActual();

    return this.alumno.obtenerAlumnos(page).pipe(
      map((response) => {
        this.success(response);
        return response.data;
      }));
  }

  eliminar(id) {

    const dialogRef = this.dialog.open(ModalConfirmComponent, {
    });

    dialogRef.afterClosed().pipe(
      filter(result => result === true),
      switchMap(() => {
        this.iniciarSolicitud();
        return this.alumno.delete(id);
      }),
      switchMap((alumno) => {
        this.notificacionSuccess('Se elimino a: ' + alumno.apellido + ' ' + alumno.nombre);
        return this.obtenerAlumnos();
      }))
      .subscribe(data => this.dataSource = data, () => this.error());
  }

  private iniciarSolicitud() {
    this.statusResponse.isLoading = true;
  }

  private success(response: ResponseAlumnos) {
    this.statusResponse.isLoading = false;
    this.statusResponse.isError = false;
    this.paginator.length = response.meta.total;
    this.paginator.pageSize = response.meta.per_page;
  }

  notificacionSuccess(message = '') {

    const data: DataNotificacion = {
      tipo: 'success',
      message
    };
    this.snackBar.openFromComponent(NotificacionComponent, {
      data
    });
  }
  private error() {
    this.statusResponse.isLoading = false;
    this.statusResponse.isError = true;
    this.statusResponse.message = 'Ups lo sentimos currio un error, intente recargar la página';
  }

  private pageActual() {
    return this.paginator.pageIndex + 1;
  }
  public autorizar(id, estado) {
    const autorizacion = estado ? 1 : 0;
    this.alumno.update(id, { autorizacion }).subscribe(
      (data => {
        console.log(data);
      }), error => {
        console.log(error.message);
      }
    );
  }
}

