import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronogramaRoutingModule } from './cronograma-routing.module';
import { ListComponent } from './list/list.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { CompartirModule } from '../compartir/compartir.module';


@NgModule({
  declarations: [ListComponent, EditarComponent],
  imports: [
    CommonModule,
    CronogramaRoutingModule,
    FormsModule,
    CompartirModule
  ]
})
export class CronogramaModule { }
