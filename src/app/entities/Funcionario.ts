class Funcionario {
    id: number;
    enderecoId: number;
    pagamentoId?: number; // Propriedade opcional
    primeiroNome: string;
    segundoNome: string;
    email: string;
    ativo: boolean;
    senha: string;
  
    constructor(id: number, enderecoId: number, primeiroNome: string, segundoNome: string, email: string, ativo: boolean, senha: string, pagamentoId?: number) {
      this.id = id;
      this.enderecoId = enderecoId;
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.email = email;
      this.ativo = ativo;
      this.senha = senha;
      this.pagamentoId = pagamentoId; // Atribuição opcional
    }
  }
  