import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../../services/alumno.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Alumno } from '../../../modelos/alumno.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['cui', 'apellidos', 'nombre', 'tercio', 'autorizar', 'habilitado', 'accion'];

  dataSource: Alumno[];
  resultsLength = 0;
  pageSize = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private alumno: AlumnoService) { }


  ngOnInit() {
    this.obtenerAlumnos();
    this.paginator.page.subscribe(() => {
      this.obtenerAlumnos(this.paginator.pageIndex + 1);
    });
  }

  obtenerAlumnos(page = 1) {
    this.isLoadingResults = true;
    this.alumno.obtenerAlumnos(page).subscribe(response => {
      this.isLoadingResults = false;
      this.isRateLimitReached = false;
      this.dataSource = response.data;
      this.resultsLength = response.meta.total;
      this.pageSize = response.meta.per_page;
    });
  }





}

