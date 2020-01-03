import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MatriculaComponent } from './matricula/matricula.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent},
  { path: 'matricularse', component: MatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
