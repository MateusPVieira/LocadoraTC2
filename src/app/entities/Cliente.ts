import { Ingresso } from "./Ingresso";

export class Cliente {
    id: number;
    nome: string;
    email: string;
    ingressos: Ingresso[];
    
    constructor(id: number, nome: string, ultimoNome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ingressos = []
      }

      addIngresso(ingresso: Ingresso){
        this.ingressos.push(ingresso);
      }
  }