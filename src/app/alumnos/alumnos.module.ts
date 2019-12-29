import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [CrearComponent, EditarComponent, ListarComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule,
  ]
})
export class AlumnosModule { }
