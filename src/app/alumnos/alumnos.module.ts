import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearComponent } from './crear/crear.component';


@NgModule({
  declarations: [AlumnosComponent, CrearComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
