import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradoresRoutingModule } from './administradores-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { CompartirModule } from '../compartir/compartir.module';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [EditarComponent, ListarComponent, CrearComponent, DetalleComponent],
  imports: [
    CommonModule,
    AdministradoresRoutingModule,
    FormsModule,
    CompartirModule
  ]
})
export class AdministradoresModule { }
