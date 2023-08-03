import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AuthGuard } from './auth-guard';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { MoviesGridComponent } from './components/movies-grid/movies-grid.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FunctionsComponent,
    TicketsComponent,
    FrontpageComponent,
    MoviesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
