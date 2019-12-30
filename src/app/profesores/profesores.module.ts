import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListarComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    FormsModule
  ]
})
export class ProfesoresModule { }
