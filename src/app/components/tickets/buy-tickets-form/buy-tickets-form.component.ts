import { Component } from '@angular/core';
import { Filme } from 'src/app/entities/Filme';
import { Linguagem } from 'src/app/entities/Linguagem';
import { Secao } from 'src/app/entities/Secao';
import { CineService } from 'src/app/services/cine.service';
import { SecaoService } from 'src/app/services/secao.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingresso } from 'src/app/entities/Ingresso';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-buy-tickets-form',
  templateUrl: './buy-tickets-form.component.html',
  styleUrls: ['./buy-tickets-form.component.scss']
})
export class BuyTicketsFormComponent {
  erros: boolean = false;
  buyForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    sessao: [null, Validators.required] 
  });

  public ingressosDisponiveis: number = 0;
  public sessaoSelected: Secao = new Secao();
  public sessoes: Secao[] = []; 
  public filme: Filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
  constructor(private fb: FormBuilder,
    private secaoService: SecaoService, 
    private cineService: CineService,
    private clienteService: ClienteService){}

  ngOnInit(){
    this.filme = this.cineService.getDetails();
    this.sessoes = this.secaoService.secoes.filter((secao: Secao) => secao.getFilme() == this.filme)
    this.buyForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sessao: [null, Validators.required] // Assuming you have a sessoes array for select options
    });
  }

  onBuy(){
    {
      if (this.buyForm.valid) {
        const formData = this.buyForm.value;
        const selectedSessaoId = this.secaoService.findSessaoIndex(formData.sessao.getId());
        console.log('Form Data:', formData);
        const ingresso: Ingresso = new Ingresso();
        ingresso.setSessao(formData.sessao);
        ingresso.setValor(formData.sessao.getFilme().valorIngresso);
        this.secaoService.secoes[selectedSessaoId].adicionarIngresso(ingresso);
        console.log(this.secaoService.secoes[selectedSessaoId]);
        const cliente = this.clienteService.buildClienteWithForm(formData);
        this.clienteService.changeCliente(cliente);
        this.secaoService.changeIngresso(ingresso);
        this.clienteService.addCliente(cliente, ingresso);
    } else {
      console.log("Erro ao comprar ingresso!")
    }
  }
}


getErrorEmailMessage() {
  const emailControl = this.buyForm.get('email');
  if (emailControl && emailControl.invalid) { // Check if emailControl is valid and not null
    if (emailControl.hasError('required')) {
      return 'Preencha o campo email!';
    }
    if (emailControl.hasError('email')) {
      return 'Não é um email válido';
    }
  }
  return ''; // No errors or control not found
}

getErrorNomeMessage() {
  const nomeControl = this.buyForm.get('nome');

  if (nomeControl && nomeControl.invalid) { // Null check and invalid check
    if (nomeControl.hasError('required')) {
      return 'Preencha o campo nome!';
    }
  }
  
  return ''; // No errors or control not found
}

getErrorSessaoMessage() {
  const sessaoControl = this.buyForm.get('sessao');

  if (sessaoControl && sessaoControl.invalid) { // Null check and invalid check
    if (sessaoControl.value === null || sessaoControl.value.getId() === 0) {
      return 'Selecione uma sessão';
    }
  }

  return ''; // No errors or control not found
}
}
