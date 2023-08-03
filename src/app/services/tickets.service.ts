import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseTicket } from '../models/purchaseTicket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiUrl = 'https://tu-web-api.com/tickets'; // Reemplaza con la URL correcta de la API

  constructor(private http: HttpClient) { }

  purchaseTickets(ticket: PurchaseTicket): Observable<PurchaseTicket> {
    return this.http.post<PurchaseTicket>(this.apiUrl, ticket);
  }
}