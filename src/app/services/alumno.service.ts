import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { ResponseAlumnos, ResponseAlumno, Alumno as Data } from '../modelos/response/alumno.models';
import { Alumno } from '../modelos/request/alumno.models';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerAlumnos(page = 1): Observable<ResponseAlumnos> {
    const urlRecurso = this.generarApiUrl(`/alumnos?page=${page}`);
    return this.http.get<ResponseAlumnos>(urlRecurso).pipe(
      delay(1000)
    );
  }

  obtenerAlumnoPorId(id: string): Observable<Data> {
    const urlRecurso = this.generarApiUrl(`/alumnos/${id}`);
    return this.http.get<ResponseAlumno>(urlRecurso).pipe(
      map(response => response.data));
  }

  store(alumno: Alumno): Observable<Data> {
    const urlRecurso = this.generarApiUrl('/alumnos');
    return this.http.post<ResponseAlumno>(urlRecurso, alumno).pipe(
      map(response => response.data)
    );
  }

  generarApiUrl(recurso: string) {
    return this.apiUrl + recurso;
  }
}
