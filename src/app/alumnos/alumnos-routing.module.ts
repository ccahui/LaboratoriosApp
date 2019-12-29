import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ListarComponent,
  }, {
    path: 'crear', component: CrearComponent,
  },  {
    path: ':id', component: EditarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
