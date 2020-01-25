import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Grupo, ResponseGrupos, ResponseGrupoDetalle } from '../modelos/grupo.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerGrupos(): Observable<Grupo[]> {
    const urlRecurso = this.generarApiUrl('/grupos');
    return this.http.get<ResponseGrupos>(urlRecurso).pipe(
      map(response => response.data)
    );
  }

  obtenerGrupoPorId(id: string): Observable<Grupo> {
    const urlRecurso = this.generarApiUrl(`/grupos/${id}`);
    return this.http.get<ResponseGrupoDetalle>(urlRecurso).pipe(
      map(response => response.data));
  }

  generarApiUrl(recurso: string) {
    return this.apiUrl + recurso;
  }
}
