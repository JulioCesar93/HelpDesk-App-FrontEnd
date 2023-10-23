import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Ticket> {
    return this.http.get<Ticket>(`${API_CONFIG.baseUrl}/tickets/${id}`);
  }

  findAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_CONFIG.baseUrl}/tickets`);
  }

  create(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${API_CONFIG.baseUrl}/tickets`, ticket);
  }
}
