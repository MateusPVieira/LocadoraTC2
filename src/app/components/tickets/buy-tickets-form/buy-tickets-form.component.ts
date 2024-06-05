import { Component } from '@angular/core';
import { Filme } from 'src/app/entities/Filme';
import { Linguagem } from 'src/app/entities/Linguagem';
import { Secao } from 'src/app/entities/Secao';
import { CineService } from 'src/app/services/cine.service';
import { SecaoService } from 'src/app/services/secao.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-buy-tickets-form',
  templateUrl: './buy-tickets-form.component.html',
  styleUrls: ['./buy-tickets-form.component.scss']
})
export class BuyTicketsFormComponent {
  erros: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required])
  public sessaoSelected: Secao = new Secao();
  public sessoes: Secao[] = []; 
  public filme: Filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
  constructor(private secaoService: SecaoService, private cineService: CineService){}

  ngOnInit(){
    this.filme = this.cineService.getDetails();
    this.sessoes = this.secaoService.secoes.filter((secao: Secao) => secao.getFilme() == this.filme)
    console.log(this.sessaoSelected);
  }

  onBuy(){

  }
  
  ngAfterContentInit(){

  } 

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      this.erros = true
      return 'Preencha o campo email!';
    }

    if(this.email.hasError('email')){
      this.erros = true
      return 'Não é um email válido'
    }

    this.erros = false;
    return ''
  }


  getErrorNomeMessage() {
    if (this.nome.hasError('required')) {
      this.erros = true;
      return 'Preencha o campo nome!';
    }
    this.erros = false;
    return '';
  }

  getErrorSelecMessage() {
    if (this.sessaoSelected.getId() == 0 || this.sessaoSelected == undefined) {
      this.erros = true;
      return 'Selecione uma sessão';
    }
    this.erros = false;
    return '';
  }

  hasErrors(){
    return this.erros;
  }
}
