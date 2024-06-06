import { Injectable } from '@angular/core';
import { CineService } from './cine.service';
import { Secao } from '../entities/Secao';
import { SalaService } from './sala.service';
import { UtilService } from './util.service';
import { Filme } from '../entities/Filme';
import { Sala } from '../entities/Sala';
import { Ingresso } from '../entities/Ingresso';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecaoService {
  secaoParaTeste ={

  }
  numeroDeSecoes: number = 20;
  horarios: string[] = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
  secoes: Secao[];

  
  private ingressoSource = new BehaviorSubject<Ingresso>(new Ingresso());
  currentIngresso = this.ingressoSource.asObservable();

  constructor(private cineService: CineService, private salaService: SalaService, private utilService: UtilService) { 
    this.secoes = this.generateSecoes();
  }


  private generateSecoes(): Secao[] {
    const salas = this.salaService.salas;
    const filmes = this.cineService.filmesEmExibicao;
    const secoes: Secao[] = [];

    if(filmes[0] == undefined){
      return [];
    }

    for (let index = 0; index < this.numeroDeSecoes; index++) {
      let secao = new Secao();
      let filmeIndex = this.utilService.generateRandInt(0,(this.cineService.filmesEmExibicao.length - 1))
      let horarioIndex = this.utilService.generateRandInt(0,(this.horarios.length - 1));
      let salaIndex = this.utilService.generateRandInt(0,(salas.length - 1));


      while(this.verifyQuantidadeSecoesPorSala(salas[salaIndex])){
        salaIndex = this.utilService.generateRandInt(0,(salas.length));
     }

      while(this.verifyQuantidadeDeSecoesComFilme(secoes, filmes[filmeIndex])){
        filmeIndex = this.utilService.generateRandInt(0,(this.cineService.filmesEmExibicao.length))
     }

      while(this.verifySecaoNoMesmoHorario(secoes, this.horarios[horarioIndex], filmes[filmeIndex])){
         horarioIndex = this.utilService.generateRandInt(0,(this.horarios.length));
      }
      secao.setId(index + 1);
      secao.setFilme(filmes[filmeIndex]);
      secao.setSala(salas[salaIndex]);
      secao.setHorario(this.horarios[horarioIndex]);
      salas[salaIndex].addSecao(secao);
      secoes.push(secao);
    }
    return secoes;
  }

  verifySecaoNoMesmoHorario(secoes: Secao[], horario: string, filme: Filme) {
    let hasSecaoNoMesmoHorario = false;
    secoes.forEach(secao => {
      if(secao.getFilme() == filme && secao.getHorario() == horario){
        hasSecaoNoMesmoHorario = true;
      }
    });
    return hasSecaoNoMesmoHorario;
  }

  verifyQuantidadeDeSecoesComFilme(secoes: Secao[], filme: Filme) {
    const limiteDeSecoesComMesmoFilme = (this.numeroDeSecoes/ this.cineService.qtddMaxFilmesEmExbicao) 
    let filmeCount = 0;
    secoes.forEach(secao => {
      if(secao.getFilme() == filme){
        filmeCount++;
      }
    });

    if(filmeCount >= limiteDeSecoesComMesmoFilme){
      return true
    }
    return false;
  }

  verifyQuantidadeSecoesPorSala(sala: Sala) {
    const limiteDeSecoesPorSala = (this.numeroDeSecoes/ this.salaService.numeroDeSalas) 
    let secoesCount = sala.getSecao().length;

    if(secoesCount >= limiteDeSecoesPorSala){
      return true
    }
    return false;
  }

  findSessaoIndex(id: number){
    for (let index = 0; index < this.secoes.length; index++) {
          if(this.secoes[index].getId() == id){
            return index;
          }        
    }
    return 0;
  }

  changeIngresso(ingresso: Ingresso) {
    this.ingressoSource.next(ingresso);
  }

}
