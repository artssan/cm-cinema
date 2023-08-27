import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseTicket } from '../models/purchaseTicket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiUrl = 'https://challengemicroservicesapi.azure-api.net/ticketpurchase/api/ticketpurchase';

  private headers = new HttpHeaders({'Ocp-Apim-Subscription-Key':'10eae1776f634f4a8a24b6933debbf26'});
  private requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  purchaseTickets(ticket: PurchaseTicket): Observable<any> {
    return this.http.post<any>(this.apiUrl, ticket, this.requestOptions);
  }
}