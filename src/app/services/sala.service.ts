import { Injectable } from '@angular/core';
import { Sala } from '../entities/Sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  numeroDeSalas: number = 5;
  salas: Sala[];

  constructor() { 
    this.salas = this.generateSalas();
  }


  private generateSalas(): Sala[] {
    const idInicial = 100;
    const salas = []; 
    for (let index = 0; index < this.numeroDeSalas; index++) {
        let sala = new Sala();
        sala.setId(idInicial + index);
        salas.push(sala);
    }
    return salas;
  }

}


