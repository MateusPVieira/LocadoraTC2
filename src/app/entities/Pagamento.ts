class Pagamento {
    id: number;
    aluguelId: number;
    funcionarioId: number;
    valor: number;
    dataPagamento: Date;

    constructor(id: number, aluguelId: number, funcionarioId: number, valor: number, dataPagamento: Date) {
        this.id = id;
        this.aluguelId = aluguelId;
        this.funcionarioId = funcionarioId;
        this.valor = valor;
        this.dataPagamento = dataPagamento;
      }
  }