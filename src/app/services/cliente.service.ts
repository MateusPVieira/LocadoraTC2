import { Injectable } from '@angular/core';
import { Cliente } from '../entities/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = []

  constructor() { }
}
