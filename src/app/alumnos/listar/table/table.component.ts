import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Alumno, ResponseAlumnos } from '../../../modelos/alumno.models';
import { StatusResponse } from '../../../modelos/status.model';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['cui', 'apellidos', 'nombre', 'tercio', 'autorizar', 'habilitado', 'accion'];
  dataSource: Alumno[];

  statusResponse: StatusResponse = { isLoading: true };
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private alumno: AlumnoService) { }

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

  private iniciarSolicitud() {
    this.statusResponse.isLoading = true;
  }

  private success(response: ResponseAlumnos) {
    this.statusResponse.isLoading = false;
    this.statusResponse.isError = false;
    this.paginator.length = response.meta.total;
    this.paginator.pageSize = response.meta.per_page;
  }

  private error() {
    this.statusResponse.isLoading = false;
    this.statusResponse.isError = true;
    this.statusResponse.message = 'Ups lo sentimos currio un error, intente recargar la página';
  }

  private pageActual() {
    return this.paginator.pageIndex + 1;
  }
}

