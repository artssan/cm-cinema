import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit{
  movieId: any;
  movieDetail : any = [];
   
  constructor(public moviesService: MoviesService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.getMovieById();
  }

  getMovieById() {       
    this.moviesService.getMovieById(this.movieId).subscribe((data) => {      
      if (data != null) {
        this.movieDetail = data;
      }
    },
    (error :any)=> { }); 
  }
}
