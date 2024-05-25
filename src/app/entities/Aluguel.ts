class Aluguel {
    id: number;
    pagamentoId: number;
    clienteId: number;
    dataAluguel: Date;
    dataRetorno: Date;

    constructor( id: number, pagamentoId: number, clienteId: number, dataAluguel: Date, dataRetorno: Date){
        this.id = id;
        this.pagamentoId = pagamentoId;
        this.clienteId = clienteId;
        this.dataAluguel = dataAluguel;
        this.dataRetorno = dataRetorno;
    }
    
  }