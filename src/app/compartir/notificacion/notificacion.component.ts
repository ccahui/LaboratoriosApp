import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})

export class NotificacionComponent implements OnInit {

  readonly messageSuccess = 'La operacion se realizo con exito';
  readonly messageError = 'La operacion no se pudo completar';
  readonly success = 'success';
  readonly error = 'error';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: DataNotificacion) { }

  ngOnInit() {
    if (this.data != null) {
      if (this.data.tipo === this.success) {
        this.data.message = this.data.message || this.messageSuccess;
      } else if (this.data.tipo === this.error) {
        this.data.message = this.data.message || this.messageError;
      }
    }
  }
}

export interface DataNotificacion {
  tipo: string;
  message?: string;
}
