import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../modelos/alumno.models';
import { AlumnoService } from '../../services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from '../../modelos/grupo.models';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  alumno: Alumno;
  grupos: Grupo[];
  constructor(private alumnoService: AlumnoService, private grupo: GrupoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const alumnoId = this.route.snapshot.paramMap.get('id');
    this.obtenerAlumnoPorId(alumnoId);
    this.obtenerGrupos();
  }

  obtenerAlumnoPorId(id) {
    this.alumnoService.obtenerAlumnoPorId(id).subscribe(alumno => {
      this.alumno = alumno;
    });
  }
  obtenerGrupos() {
    this.grupo.obtenerGrupos().subscribe(grupos => {
      this.grupos = grupos;
    });
  }
}
