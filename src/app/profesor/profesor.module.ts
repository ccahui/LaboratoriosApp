import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { CompartirModule } from '../compartir/compartir.module';


@NgModule({
  declarations: [InicioComponent, LaboratorioComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    CompartirModule
  ]
})
export class ProfesorModule { }
