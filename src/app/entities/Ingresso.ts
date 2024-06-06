import { Secao } from "./Secao";

export class Ingresso{
    private secao: Secao;
    private valor: number;

    constructor(){
        this.secao = new Secao();
        this.valor = 0;
    }

    setSessao(secao: Secao){
        this.secao = secao
    }

    getSessao(){
        return this.secao;
    }

    setValor(valor: number){
        this.valor = valor;
    }

    getValor(){
        return this.valor;
    }
}