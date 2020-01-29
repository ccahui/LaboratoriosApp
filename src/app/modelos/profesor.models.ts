
export interface Profesor {
    id: number;
    nombre: string;
    apellido: string;
    gmail: string;
    descripcion: string;
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

export interface ResponseProfesores {
    ok: boolean;
    message: string;
    data: Profesor[];
    links: Links;
    meta: Paginacion;
}

export interface ResponseProfesorDetalle {
    ok: boolean;
    message: string;
    data: Profesor;
}
