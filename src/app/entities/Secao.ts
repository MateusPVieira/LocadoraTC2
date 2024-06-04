import { Filme } from "./Filme";
import { Ingresso } from "./Ingresso";
import { Linguagem } from "./Linguagem";
import { Sala } from "./Sala";

export class Secao{
    private id: number;
    private filme: Filme;
    private ingressos: Ingresso[];
    private maximoIngressos: number;
    private sala: Sala;

    constructor(){
        this.id = 0;
        this.filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
        this.ingressos = [];
        this.maximoIngressos = 20;
        this.sala = new Sala();
    }

}