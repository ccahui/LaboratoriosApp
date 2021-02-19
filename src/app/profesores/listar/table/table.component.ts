import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Profesor, ResponseProfesores } from '../../../modelos/response/profesor.models';
import { StatusResponse } from '../../../modelos/response/status.model';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfesorService } from '../../../services/profesor.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['apellidos', 'nombre', 'gmail', 'accion'];
  dataSource: Profesor[];

  statusResponse: StatusResponse = { isLoading: true };
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private profesor: ProfesorService) { }

  ngOnInit() {
    this.obtenerProfesores().subscribe(data => this.dataSource = data, () => this.error());

    this.paginator.page.pipe(
      switchMap(() => this.obtenerProfesores()))
      .subscribe(data => this.dataSource = data, () => this.error());
  }

  obtenerProfesores(): Observable<Profesor[]> {
    this.iniciarSolicitud();
    const page = this.pageActual();

    return this.profesor.obtenerProfesores(page).pipe(
      map((response) => {
        this.success(response);
        return response.data;
      }));
  }

  private iniciarSolicitud() {
    this.statusResponse.isLoading = true;
  }

  private success(response: ResponseProfesores) {
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

