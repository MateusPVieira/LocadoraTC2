import { Injectable } from '@angular/core';
import { Cliente } from '../entities/Cliente';
import { Ingresso } from '../entities/Ingresso';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteParatests = {
    
  }

  private clienteSource = new BehaviorSubject<Cliente>(new Cliente("null",""));
  currentCliente = this.clienteSource.asObservable();

  clientes: Cliente[] = []

  constructor() { }

  addCliente(cliente: Cliente, ingresso: Ingresso){
    cliente.addIngresso(ingresso);
    this.clientes.push(cliente);
  }

  buildClienteWithForm(formData: any){
    const cliente: Cliente = new Cliente(formData.nome, formData.email);
    return cliente;
  }

  changeCliente(cliente: Cliente) {
    this.clienteSource.next(cliente);
  }

}
