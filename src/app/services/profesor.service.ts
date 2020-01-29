import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseProfesores, ResponseProfesorDetalle, Profesor } from '../modelos/profesor.models';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {


  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerProfesores(page = 1): Observable<ResponseProfesores> {
    const urlRecurso = this.generarApiUrl(`/profesores?page=${page}`);
    return this.http.get<ResponseProfesores>(urlRecurso).pipe(
      delay(1000)
    );
  }

  obtenerProfesorPorId(id: string): Observable<Profesor> {
    const urlRecurso = this.generarApiUrl(`/profesores/${id}`);
    return this.http.get<ResponseProfesorDetalle>(urlRecurso).pipe(
      map(response => response.data));
  }

  generarApiUrl(recurso: string) {
    return this.apiUrl + recurso;
  }
}
