import { Secao } from "./Secao";

export class Sala {
    private id: number;
    private secoes: Secao[];

    constructor(){
        this.id = 0;
        this.secoes = [];
    }

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }
      
    getSecao(){
        return this.secoes;
    }

    addSecao(secao: Secao){
        this.secoes.push(secao);
    }

  }