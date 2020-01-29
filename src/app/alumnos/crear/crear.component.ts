import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../modelos/grupo.models';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent implements OnInit {

  grupos: Grupo[];
  constructor(private grupo: GrupoService, private alumno: AlumnoService) {
    
  }

  ngOnInit() {
    this.grupo.obtenerGrupos().subscribe((grupos) => {
      this.grupos = grupos;
    });
  }

}
