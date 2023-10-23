import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { Ticket } from 'src/app/models/ticket';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {

  ticket: Ticket = {
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes: '',
    tecnico:     '',
    cliente:     '',
    nomeCliente: '',
    nomeTecnico: '',
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

prioridade: FormControl = new FormControl(null, [Validators.required]);
status:     FormControl = new FormControl(null, [Validators.required]);
titulo:     FormControl = new FormControl(null, [Validators.required]);
observacoes:FormControl = new FormControl(null, [Validators.required]);
tecnico:    FormControl = new FormControl(null, [Validators.required]);
cliente:    FormControl = new FormControl(null, [Validators.required]);

constructor (
  private ticketService: TicketService,
  private clienteService: ClienteService,
  private tecnicoService: TecnicoService,
  private toastService:    ToastrService,
  private router: Router,
) {}

ngOnInit(): void {
  this.findAllClientes();
  this.findAllTecnicos();
}

create(): void {
  this.ticketService.create(this.ticket).subscribe(resposta => {
    this.toastService.success('Ticket criado com sucesso', 'Novo ticket');
    this.router.navigate(['tickets']);
  }, ex => {
    console.log(ex);
    
    this.toastService.error(ex.error.error);
  })
}

findAllClientes(): void {
  this.clienteService.findAll().subscribe(resposta => {
    this.clientes = resposta;
  })
}

findAllTecnicos(): void {
  this.tecnicoService.findAll().subscribe(resposta => {
    this.tecnicos = resposta;
  })
}

validaCampos(): boolean {
  return this.prioridade.valid && 
  this.status.valid && 
  this.titulo.valid &&
  this.observacoes.valid && 
  this.tecnico.valid && 
  this.cliente.valid
}

}