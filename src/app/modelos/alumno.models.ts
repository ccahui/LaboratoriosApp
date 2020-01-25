import { Grupo } from './grupo.models';

export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    cui: string;
    gmail: string;
    autorizacion: boolean;
    matriculado: boolean;
    grupo: Grupo;
}

export interface Links {
    first: string;
    last: string;
    prev?: any;
    next: string;
}

export interface Paginacion {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface ResponseAlumnos {
    ok: boolean;
    message: string;
    data: Alumno[];
    links: Links;
    meta: Paginacion;
}

export interface ResponseAlumnoDetalle {
    ok: boolean;
    message: string;
    data: Alumno;
}
