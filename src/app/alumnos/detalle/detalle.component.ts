import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Observable } from 'rxjs';
import { Alumno } from '../../modelos/response/alumno.models';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

  alumno: Alumno;
  constructor(private alumnoService: AlumnoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.alumno = {
      id,
      cui: '',
      nombre: '',
      apellido: '',
      gmail: '',
      grupo: null,
      autorizacion: null,
      matriculado: null,
    };

    this.alumnoService.obtenerAlumnoPorId(id).subscribe(alumno => {
      this.alumno = alumno;
    });
  }



}
