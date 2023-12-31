import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './components/ticket/ticket-create/ticket-create.component';
import { TicketUpdateComponent } from './components/ticket/ticket-update/ticket-update.component';
import { TicketReadComponent } from './components/ticket/ticket-read/ticket-read.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},

      {path: 'tecnicos',                component: TecnicoListComponent},
      {path: 'tecnicos/create',         component: TecnicoCreateComponent},
      {path: 'tecnicos/update/:id',     component: TecnicoUpdateComponent},
      {path: 'tecnicos/delete/:id',     component: TecnicoDeleteComponent},

      {path: 'clientes',                component: ClienteListComponent},
      {path: 'clientes/create',         component: ClienteCreateComponent},
      {path: 'clientes/update/:id',     component: ClienteUpdateComponent},
      {path: 'clientes/delete/:id',     component: ClienteDeleteComponent},

      { path: 'tickets',                component: TicketListComponent },
      { path: 'tickets/create',         component: TicketCreateComponent },
      { path: 'tickets/update/:id',     component: TicketUpdateComponent },
      { path: 'tickets/read/:id',       component: TicketReadComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }