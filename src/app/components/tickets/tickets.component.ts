import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PurchaseTicket } from 'src/app/models/purchaseTicket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { Function } from 'src/app/models/function.model';
import { MoviesService } from 'src/app/services/movies.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  addOrderForm: PurchaseTicket = {
    movieId: 0,
    functionId: 0,
    numberOfTickets: 0,
    username: '',
    userEmail: ''
  }

  optionsMovie: Movie[] | undefined;
  optionsFunction: Function[] | undefined;

  selectedMovie: string = '';
  selectedFunction: string = '';
  functionSeats: string = '';

  @ViewChild("orderForm")
  orderForm!: NgForm;
  isSubmitted: boolean = false;

  constructor(private ticketsService: TicketsService, private functionsService: FunctionsService, private toastr: ToastrService, private moviesService: MoviesService) { }

  ngOnInit(): void { 
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.optionsMovie = movies;
    });
  }

  getFunctionsByMovieId(movieId: number): void {
    this.functionsService.getFunctionsByMovieId(movieId).subscribe((functions) => {
      if (functions != null) {
        this.optionsFunction = functions;
      }
    });
  }

  addOrder(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.ticketsService.purchaseTickets(this.addOrderForm).subscribe(async data => {
        if (data != null) {
          if (data.isSuccessful) {
            this.toastr.success(data.message);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            this.toastr.error(data.message);
          }
        }
      });
    }
  }

  onMovieSelected(event: any): void {
    var movie = this.optionsMovie?.find(x => x.title === this.selectedMovie);
    this.getFunctionsByMovieId(movie!.movieId);
  }

  onFunctionSelected(event: any): void {
    if (this.optionsFunction != null) {
      var func = this.optionsFunction.find(x => x.functionDate.toString() === this.selectedFunction);
      this.addOrderForm.functionId = func!.functionId;
      this.functionSeats = 'Seats available: ' + func!.seatsNumber;
    }
  }
}