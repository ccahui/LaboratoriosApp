import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent},
  { path: 'laboratorio/:id', component: LaboratorioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
