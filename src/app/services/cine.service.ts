import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CineService {
  private apiUrl: any = environment.apiURL;
  private apiKey: string = environment.apikey;
  private generos: any[] = [];
  private linguagens: Linguagem[] = [];
  public filmes: Filme[] = [];

  constructor(private httpClient: HttpClient) {
    this.getGeneros().subscribe((data: any) => {
      this.generos = data.genres
   });

   this.getLanguages().then((data:any) => {
      this.linguagens = data;
   })

   this.getFilmes().then((data: any) => {
      this.filmes = data;
   })
  }



  async getFilmes(){
    let filmesJson: any = this.httpClient.get(`${this.apiUrl.movies}?api_key=${this.apiKey}`);
    let filmes: Filme[] = [];
    filmesJson['results'].forEach((filmeJson: any) => {
      let linguagem: Linguagem = this.searchLanguages(filmeJson.original_language);
      let anoLancamento: number = Number.parseInt(filmeJson.release_date.slice(0,3)); 
      let duracao: number = this.generateDuration(60, 240);
      let valorIngresso: number = this.generateTicketCost(duracao, filmeJson.vote_average);
      let filme = new Filme(
        filmeJson.id,
        linguagem, 
        filmeJson.title,
        filmeJson.overview,
        filmeJson.release_date,
        anoLancamento,
        valorIngresso,
        filmeJson.vote_average,
        filmeJson.poster_path
        );
        filmes.push(filme);
    });
    return filmes;
  }

  getGeneros(){
    return this.httpClient.get(`${this.apiUrl.genres}?api_key=${this.apiKey}`);
  }

  async getLanguages(){
    let languagesJson = this.httpClient.get(`${this.apiUrl.languages}?api_key=${this.apiKey}`);
    let languages: Linguagem[] = [];
    languagesJson.forEach((languageJson: any) => {
      let language = new Linguagem(languageJson.iso_639_1, languageJson.english_name);
      languages.push(language);
    });
    return languages;
  }


  searchLanguages(language: string): Linguagem{
    this.linguagens.forEach((linguagem: Linguagem) => {
      if(linguagem.id == language){
        return linguagem;
      }
    });
    console.log(`linguagem ${language} não encontrada!`)
    return new Linguagem("","");
  }

  generateTicketCost(duracao: number, nota:number): number{
 
  const valorMaximoDuracao = 80 / 3; // 80 (valor máximo) / 3

  const duracaoNormalizada = (duracao - 60) / (240 - 60);

  const valorDuracao = duracaoNormalizada * valorMaximoDuracao;

  const notaNormalizada = nota / 10;

  const valorNota = notaNormalizada * (80 - valorMaximoDuracao);

  const valorTotal = Math.round(valorDuracao + valorNota);

  return Math.min(Math.max(valorTotal, 40), 80);
  }

  generateDuration(min: number, max:number): number {
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

  getDatasEmCartazString(dataLancamento: string){
    const datas = this.getDatasEmCartaz(dataLancamento);
    return datas.initialFormatted + " ~ " + datas.nextFormatted;
  }

  getGenerosNames(generosIds: string[], quantidade: number): string[] {
    const nomesGeneros: string[] = [];
  
    for (const generoId of generosIds) {
      const nomeGenero = this.generos.find(genero => genero.id === generoId); 
  
      if (nomeGenero) {
        nomesGeneros.push(nomeGenero.name);
  
        if (nomesGeneros.length === quantidade) {
          break; // Interrompe o loop quando a quantidade desejada for atingida
        }
      }
    }
  
    return nomesGeneros;
  }
}

