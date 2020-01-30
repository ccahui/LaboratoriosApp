import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../modelos/response/grupo.models';
import { AlumnoService } from '../../services/alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/modelos/request/alumno.models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent implements OnInit {

  grupos: Grupo[];
  form: FormGroup;
  errorValidations;
  constructor(private grupo: GrupoService, private alumno: AlumnoService, private fb: FormBuilder) {
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
    this.alumno.store(this.form.value).subscribe((data) => {
      console.log('Creado con exito');
    }, error => this.error(error));


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

  error(response = null){
    if(response instanceof HttpErrorResponse && response.status === 400){
        console.log(response.error.data);
        this.errorValidations = response.error.data;
    }
  } 


}
