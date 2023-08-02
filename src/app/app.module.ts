import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FunctionsComponent } from './functions/functions.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FunctionsComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
