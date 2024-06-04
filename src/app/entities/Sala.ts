import { Filme } from "./Filme";
import { Linguagem } from "./Linguagem";

export class Sala {
    private id: number;
    private filme: Filme;

    constructor(){
        this.id = 0;
        this.filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
    }

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }
      
    getFilme(){
        return this.filme;
    }

    setFilme(filme: Filme){
        this.filme = filme;
    }


  }