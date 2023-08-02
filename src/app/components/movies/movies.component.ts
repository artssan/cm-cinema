import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }
}