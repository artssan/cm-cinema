import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiUrl = 'https://tu-web-api.com/tickets'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  comprarTickets(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }
}