import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from 'src/app/services/movies.service';
import { NgModalConfirm } from '../ngmodal-confirm.component';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.scss']
})
export class ManageMoviesComponent implements OnInit {
  closeResult = '';
  movieList: any = [];

  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService, private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  async getAllMovies() {
    this.moviesService.getMovies().subscribe((movies) => {
      if (movies != null) {
        this.movieList = movies;
      }
    });
  }

  addMovie() {
    this.router.navigate(['add-movie']);
  }

  deleteMovieConfirmation(movie: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteMovie(movie);
      },
      (reason) => {});
  }

  deleteMovie(movie: any) {
    this.moviesService.deleteMovieById(movie.movieId).subscribe((data) => {
      if (data != null) {
        if (data.isSuccessful) {
          this.toastr.success(data.message);
          setTimeout(() => {
            this.router.navigate(['/manage-movies']);
          }, 500);
        } else {
          this.toastr.error(data.message);
          setTimeout(() => {
            this.router.navigate(['/manage-movies']);
          }, 500);
        }
      }
    });

    window.location.reload();
  }
}
