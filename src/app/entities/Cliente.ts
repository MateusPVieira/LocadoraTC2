class Cliente {
    id: number;
    enderecoId: number;
    primeiroNome: string;
    ultimoNome: string;
    ativo: boolean;
    email: string;
    
    constructor(id: number, enderecoId: number, primeiroNome: string, ultimoNome: string, ativo: boolean, email: string) {
        this.id = id;
        this.enderecoId = enderecoId;
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.ativo = ativo;
        this.email = email;
      }
  }