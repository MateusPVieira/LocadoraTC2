class Filme {
    id: number;
    linguagem: Linguagem;
    titulo: string;
    descricao: string;
    anoLancamento: number;
    valorIngresso: number;
    duracao: number;
    avaliacao: number;
    poster: string;

    constructor(id: number, linguagem: Linguagem, titulo: string, descricao: string, anoLancamento: number, valorIngresso: number, duracao: number, avaliacao: number, poster: string) {
        this.id = id;
        this.linguagem = linguagem;
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.valorIngresso = valorIngresso;
        this.duracao = duracao;
        this.avaliacao = avaliacao;
        this.poster = poster;
      }
  }