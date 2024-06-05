import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { Categoria } from 'src/app/entities/Categoria';
import { Filme } from 'src/app/entities/Filme';
import { Linguagem } from 'src/app/entities/Linguagem';
import { CineService } from 'src/app/services/cine.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { SecaoService } from '../../services/secao.service';
import { Secao } from 'src/app/entities/Secao';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports:[NgFor, MaterialModule, StarRatingComponent]
})
export class DetailsComponent {
  @Input() filme: Filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
  public imgUrl: string = "";
  public dataEmCartaz: any = "";
  public categorias: Categoria[] = [];
  public secoes: Secao[] = [];
 


  constructor(private service: CineService, private SecaoService: SecaoService){}

  ngOnInit(){
    this.filme = this.service.getDetails();
    this.filme = {
      "id": 653346,
      "linguagem": {
          "id": "en",
          "nome": "English"
      },
      "titulo": "Kingdom of the Planet of the Apes",
      "descricao": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      "anoLancamento": 2024,
      "dataLancamento": "2024-05-08",
      "valorIngresso": 40,
      "duracao": 71,
      "avaliacao": 6.995,
      "poster": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
      "categorias": [
          {
              "id": 878,
              "nome": "Science Fiction"
          },
          {
              "id": 12,
              "nome": "Adventure"
          },
          {
              "id": 28,
              "nome": "Action"
          }
      ]
  }
    this.imgUrl =`https://image.tmdb.org/t/p/w500/${this.filme.poster}`
    this.dataEmCartaz = this.service.getDatasEmCartazString(this.filme.dataLancamento);
    this.categorias = this.filme.categorias;
    this.secoes = this.SecaoService.secoes.filter((secao: Secao) => secao.getFilme() == this.filme)
  }

}
