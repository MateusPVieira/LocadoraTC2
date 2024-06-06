import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { Cliente } from 'src/app/entities/Cliente';
import { Ingresso } from 'src/app/entities/Ingresso';
import { ClienteService } from 'src/app/services/cliente.service';
import { SecaoService } from 'src/app/services/secao.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  standalone: true,
  imports:[MaterialModule, NgIf]
})
export class TicketComponent {
  
  cliente: Cliente = new Cliente("","");
  ingresso: Ingresso = new Ingresso();

  constructor(private sessaoService: SecaoService, private clienteService: ClienteService){
    this.clienteService.currentCliente.subscribe(cliente => this.cliente = cliente);
    this.sessaoService.currentIngresso.subscribe(ingresso => this.ingresso = ingresso);
    console.log(this.cliente);
  }


}
