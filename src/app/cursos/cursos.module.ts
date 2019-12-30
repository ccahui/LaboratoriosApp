import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetalleComponent, ListarComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ]
})
export class CursosModule { }
