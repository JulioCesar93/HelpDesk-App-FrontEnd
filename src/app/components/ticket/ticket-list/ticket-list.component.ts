import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ELEMENT_DATA: Ticket[] = []
  FILTERED_DATA: Ticket[] = []

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor (
    private service: TicketService
  ) { }

  ngOnInit(): void {
    this.findAll();
}

findAll(): void {
  this.service.findAll().subscribe(resposta => {
    this.ELEMENT_DATA = resposta;
    this.dataSource = new MatTableDataSource<Ticket>(resposta);
    this.dataSource.paginator = this.paginator;
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

retornaStatus(status: any): string {
  if(status == '0') {
    return 'ABERTO'
  } else if(status == '1') {
    return 'EM ANDAMENTO'
  } else {
    return 'ENCERRADO'
  }
}

retornaPrioridade(prioridade: any): string {
  if(prioridade == '0') {
    return 'BAIXA'
  } else if(prioridade == '1') {
    return 'MÉDIA'
  } else {
    return 'ALTA'
  }
}

orderByStatus(status: any): void{
  let list: Ticket[] = []
  this.ELEMENT_DATA.forEach(element => {
    if(element.status == status)
      list.push(element)
  });
  this.FILTERED_DATA = list;
  this.dataSource = new MatTableDataSource<Ticket>(list);
  this.dataSource.paginator = this.paginator;
}

}