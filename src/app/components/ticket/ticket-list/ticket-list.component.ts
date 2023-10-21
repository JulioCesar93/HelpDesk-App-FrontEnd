import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Ticket } from 'src/app/models/ticket';


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

  constructor() {}

  ngOnInit(): void {}

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}