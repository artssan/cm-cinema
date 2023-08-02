import { Component, OnInit } from '@angular/core';
import { Funcion } from '../../models/funcion.model';
import { FuncionesService } from '../../services/funciones.service';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {
  funciones: Funcion[];

  constructor(private funcionesService: FuncionesService) { }

  ngOnInit(): void {
    this.funcionesService.getFunciones().subscribe((funciones) => {
      this.funciones = funciones;
    });
  }
}