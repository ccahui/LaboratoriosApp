export enum Role {
    admin = 'ADMIN',
    alumno = 'ALUMNO',
    profesor = 'PROFESOR'
}

export interface Usuario {
    email?: string;
    password?: string;
    role?: Role;
    nombre?: string;
    token?: string;
}


