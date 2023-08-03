import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.sass']
})
export class MoviesGridComponent implements OnInit {
  limit: number = 8;
  columns: number = 4;
  movies!: Movie[];
  modalRef!: BsModalRef;

  constructor(private moviesService: MoviesService, private modalService: BsModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies(this.limit).subscribe(movies => this.movies = movies);;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }
}
