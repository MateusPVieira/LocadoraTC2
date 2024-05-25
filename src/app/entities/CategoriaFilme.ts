class CategoriaFilme {
    filmeId: number;
    categoriaId: number;
    ultimaAtualizacao: Date;

    constructor(filmeId: number, categoriaId: number, ultimaAtualizacao: Date = new Date()) {
        this.filmeId = filmeId;
        this.categoriaId = categoriaId;
        this.ultimaAtualizacao = ultimaAtualizacao;
      }
  }