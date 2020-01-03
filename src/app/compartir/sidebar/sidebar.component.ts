import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: []
})
export class SidebarComponent implements OnInit {
    menus = [{
        titulo: 'Alumnos',
        icono: 'fa fa-dashboard',
        url: '/alumnos'
    }, {
        titulo: 'Docentes',
        icono: 'fa fa-folder-open',
        url: '/docentes'
    }, {
        titulo: 'Administradores',
        icono: 'fa fa-folder',
        url: '/administradores'
    },  {
        titulo: 'Cursos',
        icono: 'fa fa-folder',
        url: '/cursos'
    },  {
        titulo: 'Laboratorios',
        icono: 'fa fa-folder',
        url: '/laboratorios'
    },
    {
        titulo: 'Cronograma',
        icono: 'fa fa-folder',
        url: '/cronograma'
    },
];

menusAlumno = [{
    titulo: 'Alumnos-Inicio',
    icono: 'fa fa-dashboard',
    url: '/alumno'
}];

    constructor() { }

    ngOnInit() {
    }

}
