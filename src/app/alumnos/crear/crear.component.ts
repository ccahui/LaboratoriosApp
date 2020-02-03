import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../modelos/response/grupo.models';
import { AlumnoService } from '../../services/alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/request/alumno.models';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataNotificacion, NotificacionComponent } from 'src/app/compartir/notificacion/notificacion.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent implements OnInit {

  grupos: Grupo[];
  form: FormGroup;
  errorValidations;
  loading = false;

  constructor(private grupo: GrupoService, private alumno: AlumnoService, private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.obtenerGrupos();
    this.iniciarFormBuilder();
    this.iniciarFormularioConDatos();
  }

  obtenerGrupos() {
    this.grupo.obtenerGrupos().subscribe((grupos) => {
      this.grupos = grupos;
    });
  }

  iniciarFormBuilder() {
    this.form = this.fb.group({
      cui: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      gmail: ['', [Validators.required, Validators.email]],
      grupo_id: ['']
    });
  }

  store() {
    this.errorValidations = [];
    this.loading = true;
    this.alumno.store(this.form.value).pipe(
      finalize(() => {
      this.loading = false;
    })).subscribe((data) => {
      this.notificacionSuccess('Se registro exitosamente a: ' + data.apellido + ' ' + data.nombre);
      this.form.reset();

    }, error => this.error(error));
  }

  notificacionSuccess(message = '') {

    const data: DataNotificacion = {
      tipo: 'success',
      message
    };
    this.snackBar.openFromComponent(NotificacionComponent, {
      data
    });
  }
  private iniciarFormularioConDatos() {
    const data: Alumno = {
      cui: '20150455',
      nombre: 'Kristian',
      apellido: 'Ccahui',
      gmail: 'kccahui@unsa.edu.pe',
      grupo_id: ''
    };
    this.form.setValue(data);
  }

  error(response = null) {
    if (response instanceof HttpErrorResponse && response.status === 400) {
      console.log(response.error.data);
      this.errorValidations = response.error.data;
    }
  }


}
