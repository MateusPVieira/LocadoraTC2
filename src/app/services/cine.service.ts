import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Linguagem } from '../entities/Linguagem';
import { Filme } from '../entities/Filme';
import { Categoria } from '../entities/Categoria';



@Injectable({
  providedIn: 'root'
})
export class CineService {
  private qtddMaxGenerosExibida: number = 3;
  public qtddMaxFilmesEmExbicao: number = 4;

  private apiUrl: any = environment.apiURL;
  private apiKey: string = environment.apikey;
  public generos: any[] = [];
  public linguagens: Linguagem[] = [];
  public filmes: Filme[] = [];
  public filmesEmExibicao: Filme[] = [];
  public filme: Filme = new Filme(0, new Linguagem("",""), "", "", 0, "", 0, 0, 0, "", []);

  constructor(private httpClient: HttpClient) {

  }

  sendDetails(filme: Filme){
    this.filme = filme;
  }

  getDetails(){
    return this.filme;
  }

  async getFilmes() {
    return this.httpClient.get(`${this.apiUrl.movies}?api_key=${this.apiKey}`)
  }

  mountFilmes(filmesJson: any){
      let filmes: Filme[] = [];
      filmesJson['results'].forEach((filmeJson: any) => {
        let linguagem: Linguagem = this.searchLanguages(filmeJson.original_language);
        let anoLancamento: number = Number.parseInt(filmeJson.release_date.slice(0, 4));
        let duracao: number = this.generateDuration(60, 240);
        let valorIngresso: number = this.generateTicketCost(duracao, filmeJson.vote_average);
        let generos = this.mountGeneros(filmeJson.genre_ids);
        let filme = new Filme(
          filmeJson.id,
          linguagem,
          filmeJson.title,
          filmeJson.overview,
          anoLancamento,
          filmeJson.release_date,
          valorIngresso,
          duracao,
          filmeJson.vote_average,
          filmeJson.poster_path,
          generos
        );
        filmes.push(filme);
      });
      this.filterFilmesEmExibicao();
      return filmes;
  }

  async getGeneros() {
    return this.httpClient.get(`${this.apiUrl.genres}?api_key=${this.apiKey}`);
  }

  mountGeneros(ids: any[]) {
    const categorias: Categoria[] = []
    ids.forEach((id: any) => {
      const nome: string = this.getGenerosNames([id])[0];
      categorias.push(new Categoria(id, nome))
    });
    return categorias;
  }

  async getLanguages() {
    return this.httpClient.get(`${this.apiUrl.languages}?api_key=${this.apiKey}`);
  }

  mountLanguages(languagesJson: any){
      let languages: Linguagem[] = [];
      languagesJson.forEach((languageJson: any) => {
        let language = new Linguagem(languageJson.iso_639_1, languageJson.english_name);
        languages.push(language);
      });
      return languages;
}

  searchLanguages(language: string): Linguagem {
    let linguagemFound;
    this.linguagens.forEach((linguagem: Linguagem) => {
      if (linguagem.id == language) {
        linguagemFound = linguagem;
      }
    });
    if (linguagemFound) {
      return linguagemFound;
    }
    console.log(`linguagem ${language} não encontrada!`)
    return new Linguagem("", "");
  }

  filterFilmesEmExibicao(){
    console.log(this.filmes)
    const filmesEmExibicao: Filme[] = [];
   // const randomIndexes = this.generateRandomNumbers(this.qtddMaxFilmesEmExbicao);
   const randomIndexes = [1,2,3,4]
    console.log(randomIndexes);
    for (let index = 0; index < this.qtddMaxFilmesEmExbicao; index++) {
      filmesEmExibicao.push(this.filmes[randomIndexes[index]])      
    }
    console.log(filmesEmExibicao);
    this.filmesEmExibicao = filmesEmExibicao;
  }

  generateRandomNumbers(qtdd:number): number[]{
    const numbers: number[] = []
    while(numbers.length != qtdd){
      let randomNumber = this.generateDuration(0,19);//reproveitar geração aleatoria da duração   
      if(!numbers.includes(randomNumber)){
        numbers.push(randomNumber);
      }        
    }
    return numbers;
  }

  generateTicketCost(duracao: number, nota: number): number {

    const valorMaximoDuracao = 80 / 3; // 80 (valor máximo) / 3

    const duracaoNormalizada = (duracao - 60) / (240 - 60);

    const valorDuracao = duracaoNormalizada * valorMaximoDuracao;

    const notaNormalizada = nota / 10;

    const valorNota = notaNormalizada * (80 - valorMaximoDuracao);

    const valorTotal = Math.round(valorDuracao + valorNota);

    return Math.min(Math.max(valorTotal, 40), 80);
  }

  generateDuration(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  /**
   * Formata uma data inicial e calcula a data 3 semanas à frente.
   *
   * @param dataLancamento - A data inicial no formato "AAAA-MM-DD".
   * @returns Um objeto contendo:
   *   - `initialFormatted`: A data inicial formatada como "DD/MM".
   *   - `nextFormatted`: A data 3 semanas após a inicial, formatada como "DD/MM".
   **/
  getDatasEmCartaz(dataLancamento: string): { initialFormatted: string, nextFormatted: string } {
    const initialDate = new Date(dataLancamento);

    // Formatação da data inicial (dd/mm)
    const initialDay = initialDate.getDate().toString().padStart(2, '0');
    const initialMonth = (initialDate.getMonth() + 1).toString().padStart(2, '0');
    const initialFormatted = `${initialDay}/${initialMonth}`;

    // Cálculo da data futura (3 semanas depois)
    const nextDate = new Date(initialDate);
    nextDate.setDate(initialDate.getDate() + 21); // 3 semanas * 7 dias/semana = 21 dias

    // Formatação da data futura (dd/mm)
    const nextDay = nextDate.getDate().toString().padStart(2, '0');
    const nextMonth = (nextDate.getMonth() + 1).toString().padStart(2, '0');
    const nextFormatted = `${nextDay}/${nextMonth}`;

    return { initialFormatted, nextFormatted };
  }

  getDatasEmCartazString(dataLancamento: string) {
    const datas = this.getDatasEmCartaz(dataLancamento);
    return datas.initialFormatted + " ~ " + datas.nextFormatted;
  }

  getGenerosNames(generosIds: string[]): string[] {
    const nomesGeneros: string[] = [];

    for (const generoId of generosIds) {
      const nomeGenero = this.generos.find(genero => genero.id === generoId);

      if (nomeGenero) {
        nomesGeneros.push(nomeGenero.name);
      }
    }

    return nomesGeneros;
  }
}

