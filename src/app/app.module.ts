import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ManageMoviesComponent } from './components/manage-movies/manage-movies.component';
import { AddMovieComponent } from './components/manage-movies/add-movie/add-movie.component';
import { EditMovieComponent } from './components/manage-movies/edit-movie/edit-movie.component';
import { ViewMovieComponent } from './components/manage-movies/view-movie/view-movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ManageFunctionsComponent } from './components/manage-functions/manage-functions.component';
import { AddFunctionComponent } from './components/manage-functions/add-function/add-function.component';
import { EditFunctionComponent } from './components/manage-functions/edit-function/edit-function.component';
import { ViewFunctionComponent } from './components/manage-functions/view-function/view-function.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FunctionsComponent,
    TicketsComponent,
    FrontpageComponent,
    MoviesGridComponent,
    MoviesListComponent,
    ManageMoviesComponent,
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieComponent,
    ManageFunctionsComponent,
    AddFunctionComponent,
    EditFunctionComponent,
    ViewFunctionComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
