import { Links, Pagination } from './pagination.models';

export interface Profesor {
    id: number;
    nombre: string;
    apellido: string;
    gmail: string;
    descripcion: string;
}

export interface ResponseProfesores {
    ok: boolean;
    message: string;
    data: Profesor[];
    links: Links;
    meta: Pagination;
}

export interface ResponseProfesor {
    ok: boolean;
    message: string;
    data: Profesor;
}

