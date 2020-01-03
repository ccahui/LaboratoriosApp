import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoriosRoutingModule } from './laboratorios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CompartirModule } from '../compartir/compartir.module';
import { FormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';


@NgModule({
  declarations: [ListarComponent, EditarComponent, CrearComponent, DetalleComponent, AlumnosComponent],
  imports: [
    CommonModule,
    LaboratoriosRoutingModule,
    CompartirModule,
    FormsModule
  ]
})
export class LaboratoriosModule { }
