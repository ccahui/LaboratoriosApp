import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradoresRoutingModule } from './administradores-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditarComponent, ListarComponent, CrearComponent],
  imports: [
    CommonModule,
    AdministradoresRoutingModule,
    FormsModule
  ]
})
export class AdministradoresModule { }
