import { Categoria } from "./Categoria";
import { Linguagem } from "./Linguagem";

export class Filme {
    id: number;
    linguagem: Linguagem;
    titulo: string;
    descricao: string;
    anoLancamento: number;
    dataLancamento: string;
    valorIngresso: number;
    duracao: number;
    avaliacao: number;
    poster: string;
    categorias: Categoria[];


    constructor(id: number, linguagem: Linguagem, titulo: string, descricao: string, anoLancamento: number, dataLancamento: string, valorIngresso: number, duracao: number, avaliacao: number, poster: string, categorias: Categoria[]) {
        this.id = id;
        this.linguagem = linguagem;
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.dataLancamento = dataLancamento;
        this.valorIngresso = valorIngresso;
        this.duracao = duracao;
        this.avaliacao = avaliacao;
        this.poster = poster;
        this.categorias = categorias;
      }

  }