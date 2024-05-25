class Filme {
    id: number;
    linguagemId: number;
    titulo: string;
    descricao: string;
    anoLancamento: number;
    duracaoAluguel: number;
    taxaAluguel: number;
    duracao: number;
    custoReposicao: number;
    avaliacao: number;

    constructor(id: number, linguagemId: number, titulo: string, descricao: string, anoLancamento: number, duracaoAluguel: number, taxaAluguel: number, duracao: number, custoReposicao: number, avaliacao: number) {
        this.id = id;
        this.linguagemId = linguagemId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.duracaoAluguel = duracaoAluguel;
        this.taxaAluguel = taxaAluguel;
        this.duracao = duracao;
        this.custoReposicao = custoReposicao;
        this.avaliacao = avaliacao;
      }
  }