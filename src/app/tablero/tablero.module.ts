import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero.component';
import { CompartirModule } from '../compartir/compartir.module';
import { PerfilComponent } from './perfil/perfil.component';
import { AlumnosModule } from '../alumnos/alumnos.module';

@NgModule({
  declarations: [TableroComponent, PerfilComponent],
  imports: [
    CommonModule,
    TableroRoutingModule,
    CompartirModule,
    AlumnosModule
  ]
})
export class TableroModule { }
