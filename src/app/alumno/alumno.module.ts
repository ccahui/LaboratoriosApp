import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InicioComponent, MatriculaComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FormsModule
  ]
})
export class AlumnoModule { }
