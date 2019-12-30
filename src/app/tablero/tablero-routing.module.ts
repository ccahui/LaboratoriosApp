import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {
    path: '', component: TableroComponent,
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: '', pathMatch: 'full', redirectTo: '/perfil' },
    ]
  }, {
    path: 'alumnos', component: TableroComponent,
    loadChildren: () => import('../alumnos/alumnos.module').then(m => m.AlumnosModule)
  }, {
    path: 'docentes', component: TableroComponent,
    loadChildren: () => import('../profesores/profesores.module').then(m => m.ProfesoresModule)
  },  {
    path: 'administradores', component: TableroComponent,
    loadChildren: () => import('../administradores/administradores.module').then(m => m.AdministradoresModule)
  },
  {
    path: 'cursos', component: TableroComponent,
    loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
