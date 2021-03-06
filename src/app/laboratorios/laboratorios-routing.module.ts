import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarComponent } from './editar/editar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';



const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ListarComponent,
  }, {
    path: 'crear', component: CrearComponent,
  }, {
    path: 'detalle', component: DetalleComponent,
  }, {
    path: ':id', component: EditarComponent,
  },
  {
    path: ':id/alumnos', component: AlumnosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriosRoutingModule { }
