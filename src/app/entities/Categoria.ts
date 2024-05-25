class Categoria {
    id: number;
    nome: string;
    ultimaAtualizacao: Date;

    constructor(id: number, nome: string, ultimaAtualizacao: Date = new Date()) {
        this.id = id;
        this.nome = nome;
        this.ultimaAtualizacao = ultimaAtualizacao;
      }
    
  }