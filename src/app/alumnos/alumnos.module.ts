import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CompartirModule } from '../compartir/compartir.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CrearComponent, EditarComponent, ListarComponent, DetalleComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule,
    CompartirModule,
  ]
})
export class AlumnosModule { }
