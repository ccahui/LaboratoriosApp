import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CompartirModule } from '../compartir/compartir.module';
import { TableComponent } from './listar/table/table.component';
import { MaterialModule } from '../material/material.module';
import { NotificacionComponent } from '../compartir/notificacion/notificacion.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ModalConfirmComponent } from '../compartir/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [CrearComponent, EditarComponent, ListarComponent, DetalleComponent, TableComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompartirModule,
    MaterialModule
  ],
  entryComponents: [NotificacionComponent, ModalConfirmComponent],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    }
  ]

})
export class AlumnosModule { }
