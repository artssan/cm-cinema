import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Function } from 'src/app/models/function.model';
import { Movie } from 'src/app/models/movie.model';
import { FunctionsService } from 'src/app/services/functions.service';
import { MoviesService } from 'src/app/services/movies.service';

providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]

@Component({
  selector: 'app-add-function',
  templateUrl: './add-function.component.html',
  styleUrls: ['./add-function.component.scss']
})
export class AddFunctionComponent implements OnInit{
  addFunctionForm: Function = {
    functionId: 0,
    movieId: 0,
    price: 0,
    seatsNumber: 0,
    functionDate: ''
  };

  selectedMovie: string = '';
  optionsMovie: Movie[] | undefined;

  @ViewChild("functionForm")
  functionForm!: NgForm;
  isSubmitted: boolean = false;

  constructor(private router: Router, private functionsService: FunctionsService, private toastr: ToastrService, private moviesService: MoviesService) { }

  dateToString(date: any): string {
    if (date.month.toString().length == 1) {
      date.month = `0${date.month}`
    }

    if (date.day.toString().length == 1) {
      date.day = `0${date.day}`
    }
    
    var dateString = `${date.year}-${date.month}-${date.day}`;
    return dateString;
  }

  ngOnInit(): void {  
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.optionsMovie = movies;
    });
  }

  addFunction(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.addFunctionForm.functionDate = this.dateToString(this.addFunctionForm.functionDate);
      this.functionsService.createFunction(this.addFunctionForm).subscribe(async data => {
        if (data != null) {
          if (data.isSuccessful) {
            this.toastr.success(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          } else {
            this.toastr.error(data.message);
            setTimeout(() => {
              this.router.navigate(['/manage-functions']);
            }, 500);
          }
        }
      });
    }
  }

  onMovieSelected(event: any): void {
    var movie = this.optionsMovie?.find(x => x.title === this.selectedMovie);
    this.addFunctionForm.movieId = movie!.movieId;
  }
}
