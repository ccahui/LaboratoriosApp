import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../modelos/grupo.models';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent implements OnInit {

  grupos: Grupo[];
  constructor(private grupo: GrupoService) {
  }

  ngOnInit() {
    this.grupo.obtenerGrupos().subscribe((grupos) => {
      this.grupos = grupos;
    });
  }

}
