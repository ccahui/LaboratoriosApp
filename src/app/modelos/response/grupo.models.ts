export interface Grupo {
    numero: number;
    descripcion: string;
    id: number;
    fechaInicio: string;
    fechaFin: string;
}

export interface ResponseGrupos {
    ok: boolean;
    message: string;
    data: Grupo[];
}

export interface ResponseGrupo {
    ok: boolean;
    message: string;
    data: Grupo;
}
