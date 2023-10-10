import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit{
  
  ELEMENT_DATA: Tecnico [] = [
    {
      id: 1,
      nome: 'Julio Cesar',
      cpf: '111.200.301-51',
      email: 'julio@mail.com',
      senha: '8888',
      perfis: ['0'],
      dataCriacao: '02/11/2023'

    }
  ]

  displayedColumns = ['id', 'name', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor () {}

  ngOnInit(): void { }
}



