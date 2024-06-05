import { Filme } from "./Filme";
import { Ingresso } from "./Ingresso";
import { Linguagem } from "./Linguagem";
import { Sala } from "./Sala";

export class Secao {
    private id: number;
    private filme: Filme;
    private ingressos: Ingresso[];
    private maximoIngressos: number;
    private horario: string;
    private sala: Sala;

    constructor() {
        this.id = 0;
        this.filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
        this.ingressos = [];
        this.maximoIngressos = 20;
        this.sala = new Sala();
        this.horario = "";
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getFilme(): Filme {
        return this.filme;
    }

    getIngressos(): Ingresso[] {
        return this.ingressos;
    }

    getMaximoIngressos(): number {
        return this.maximoIngressos;
    }

    getHorario(): string {
        return this.horario;
    }

    getSala(): Sala {
        return this.sala;
    }

    // Setters
    setId(novoId: number): void {
        this.id = novoId;
    }

    setFilme(novoFilme: Filme): void {
        this.filme = novoFilme;
    }

    setSala(sala: Sala){
        this.sala = sala;
    }
    
    setHorario(horario: string){
        this.horario = horario;
    }
    // Método para adicionar um ingresso
    adicionarIngresso(ingresso: Ingresso): void {
        if (this.ingressos.length < this.maximoIngressos) {
            this.ingressos.push(ingresso);
        } else {
            throw new Error("Limite máximo de ingressos atingido.");
        }
    }


}


