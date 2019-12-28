import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearComponent } from './crear/crear.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: AlumnosComponent,
  }, {
    path: 'crear', component: CrearComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
