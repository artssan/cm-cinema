import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  ticketForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ticketsService: TicketsService) {
    this.ticketForm = this.formBuilder.group({
      functionId: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
      username: ['', Validators.required],
      userEmail: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Inicializar datos necesarios, por ejemplo, cargar funciones disponibles
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticket = this.ticketForm.value;
      this.ticketsService.purchaseTickets(ticket).subscribe(
        (response) => {
          // Manejar respuesta exitosa, por ejemplo, mostrar mensaje de compra exitosa
        },
        (error) => {
          // Manejar error, por ejemplo, mostrar mensaje de error al comprar tickets
        }
      );
    }
  }
}