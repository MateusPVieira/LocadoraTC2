class Endereco {
    id: number;
    rua: string;
    numero: number;
    cep: string;
    telefone: string;
    cidade: string;
    bairro: string;

    constructor(id: number, rua: string, numero: number, cep: string, telefone: string, cidade: string, bairro: string) {
        this.id = id;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
        this.telefone = telefone;
        this.cidade = cidade;
        this.bairro = bairro;
      }
  }