import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseAlumnos, ResponseAlumnoDetalle, Alumno} from '../modelos/alumno.models';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerAlumnos(): Observable<ResponseAlumnos> {
    const urlRecurso = this.generarApiUrl('/alumnos');
    return this.http.get<ResponseAlumnos>(urlRecurso);
  }

  obtenerAlumnoPorId(id: string): Observable<Alumno> {
    const urlRecurso = this.generarApiUrl(`/alumnos/${id}`);
    return this.http.get<ResponseAlumnoDetalle>(urlRecurso).pipe(
      map(response => response.data));
  }

  generarApiUrl(recurso: string) {
    return this.apiUrl + recurso;
  }
}
