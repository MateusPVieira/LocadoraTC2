import { Ingresso } from "./Ingresso";

export class Cliente {
    nome: string;
    email: string;
    ingressos: Ingresso[];
    
    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
        this.ingressos = []
      }

      addIngresso(ingresso: Ingresso){
        this.ingressos.push(ingresso);
      }
  }