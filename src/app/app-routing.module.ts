import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'tickets', component: TicketsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
