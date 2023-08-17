import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ManageMoviesComponent } from './components/manage-movies/manage-movies.component';
import { AddMovieComponent } from './components/manage-movies/add-movie/add-movie.component';
import { ViewMovieComponent } from './components/manage-movies/view-movie/view-movie.component';
import { EditMovieComponent } from './components/manage-movies/edit-movie/edit-movie.component';
import { ManageFunctionsComponent } from './components/manage-functions/manage-functions.component';
import { AddFunctionComponent } from './components/manage-functions/add-function/add-function.component';
import { ViewFunctionComponent } from './components/manage-functions/view-function/view-function.component';
import { EditFunctionComponent } from './components/manage-functions/edit-function/edit-function.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'movie/:movieId', component: MovieDetailComponent },

  // Manage Movies routes
  { path: 'manage-movies', component: ManageMoviesComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'view-movie/:movieId', component: ViewMovieComponent},
  { path: 'edit-movie/:movieId', component: EditMovieComponent},

  // Manage Functions routes
  { path: 'manage-functions', component: ManageFunctionsComponent},
  { path: 'add-function', component: AddFunctionComponent},
  { path: 'view-function/:functionId', component: ViewFunctionComponent},
  { path: 'edit-function/:functionId', component: EditFunctionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
