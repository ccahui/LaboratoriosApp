import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { CompartirModule } from '../compartir/compartir.module';
import { TableComponent } from './listar/table/table.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ListarComponent, CrearComponent, EditarComponent, DetalleComponent, TableComponent],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    FormsModule,
    CompartirModule,
    MaterialModule
  ]
})
export class ProfesoresModule { }
