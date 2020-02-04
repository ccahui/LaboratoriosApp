import { Grupo } from './grupo.models';
import { Links, Pagination } from './pagination.models';

export interface Alumno {
    id: string;
    nombre: string;
    apellido: string;
    cui: string;
    gmail: string;
    autorizacion: boolean;
    matriculado: boolean;
    grupo: Grupo;
}

export interface ResponseAlumnos {
    ok: boolean;
    message: string;
    data: Alumno[];
    links: Links;
    meta: Pagination;
}

export interface ResponseAlumno {
    ok: boolean;
    message: string;
    data: Alumno;
}
