import { Secao } from "./Secao";

export class Ingresso{
    private secao: Secao;
    private valor: number;

    constructor(){
        this.secao = new Secao();
        this.valor = 0;
    }
}