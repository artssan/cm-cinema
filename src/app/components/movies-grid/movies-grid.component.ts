import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit, Input, TemplateRef, numberAttribute } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass']
})
export class MoviesGridComponent implements OnInit {
  @Input
  ({ transform: numberAttribute }) limit: number = 8;
  @Input
  ({ transform: numberAttribute }) columns: number = 4;
  @Input
  ({ transform: numberAttribute }) exclude: number = 0;
  
  movies!: Movie[];
  modalRef!: BsModalRef;

  constructor(private moviesService: MoviesService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies(this.limit, this.exclude).subscribe(movies => this.movies = movies);;
  }
}
