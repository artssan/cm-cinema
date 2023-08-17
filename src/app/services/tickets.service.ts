import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseTicket } from '../models/purchaseTicket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiUrl = 'https://localhost:7094/api/ticketpurchase';

  constructor(private http: HttpClient) { }

  purchaseTickets(ticket: PurchaseTicket): Observable<any> {
    return this.http.post<any>(this.apiUrl, ticket);
  }
}