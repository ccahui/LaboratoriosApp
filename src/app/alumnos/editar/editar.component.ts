import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../modelos/response/alumno.models';
import { AlumnoService } from '../../services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from '../../modelos/response/grupo.models';
import { GrupoService } from '../../services/grupo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { DataNotificacion, NotificacionComponent } from '../../compartir/notificacion/notificacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  grupos: Grupo[];
  loading = false;
  errorValidations;
  constructor(private alumnoService: AlumnoService, private grupo: GrupoService,
              private snackBar: MatSnackBar, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    const alumnoId = this.obtenerId();
    this.obtenerAlumnoPorId(alumnoId);
    this.iniciarFormBuilder();
    this.obtenerGrupos();
  }

  iniciarFormBuilder() {
    this.form = this.fb.group({
      cui: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      gmail: ['', [Validators.required, Validators.email]],
      grupo_id: [''],
      autorizacion: ['']
    });
  }

  obtenerAlumnoPorId(id) {
    this.alumnoService.obtenerAlumnoPorId(id).subscribe(alumno => {
      const grupoId = alumno.grupo ? alumno.grupo.id : '';
      const data = {
        cui: alumno.cui,
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        gmail: alumno.gmail,
        grupo_id: grupoId,
        autorizacion: alumno.autorizacion ? 1 : 0,
      };
      this.form.setValue(data);
      console.log(this.form.value);
    });
  }
  obtenerGrupos() {
    this.grupo.obtenerGrupos().subscribe(grupos => {
      this.grupos = grupos;
    });
  }
  actualizar() {
    const id = this.obtenerId();
    this.errorValidations = [];
    this.loading = true;
    this.alumnoService.update(id, this.form.value).pipe(
      finalize(() => {
        this.loading = false;
      })).subscribe((data) => {
        this.notificacionSuccess('Se Actualizo exitosamente a: ' + data.apellido + ' ' + data.nombre);

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
  error(response = null) {
    if (response instanceof HttpErrorResponse && response.status === 400) {
      console.log(response.error.data);
      this.errorValidations = response.error.data;
    }
  }

  private obtenerId(){
    return this.route.snapshot.paramMap.get('id');
  }
}
