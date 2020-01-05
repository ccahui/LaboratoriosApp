import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: TableroComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'perfil', component: PerfilComponent },
      { path: '', pathMatch: 'full', redirectTo: '/perfil' },
    ]
  }, {
    canActivate: [ AuthGuard ],
    path: 'alumnos', component: TableroComponent,
    loadChildren: () => import('../alumnos/alumnos.module').then(m => m.AlumnosModule)
  }, {
    path: 'docentes', component: TableroComponent,
    loadChildren: () => import('../profesores/profesores.module').then(m => m.ProfesoresModule)
  }, {
    path: 'administradores', component: TableroComponent,
    loadChildren: () => import('../administradores/administradores.module').then(m => m.AdministradoresModule)
  },
  {
    path: 'cursos', component: TableroComponent,
    loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosModule)
  }, {
    path: 'laboratorios', component: TableroComponent,
    loadChildren: () => import('../laboratorios/laboratorios.module').then(m => m.LaboratoriosModule)
  }, {
    path: 'cronograma', component: TableroComponent,
    loadChildren: () => import('../cronograma/cronograma.module').then(m => m.CronogramaModule)
  }, {
    path: 'alumno', component: TableroComponent,
    loadChildren: () => import('../alumno/alumno.module').then(m => m.AlumnoModule)
  },
  {
    path: 'docente', component: TableroComponent,
    loadChildren: () => import('../profesor/profesor.module').then(m => m.ProfesorModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroRoutingModule { }
