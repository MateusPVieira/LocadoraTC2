import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';
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
 

  constructor(private secaoService: SecaoService, private cineService: CineService){}


  ngOnInit(){
    this.filme = this.cineService.getDetails();
    this.secoes = this.secaoService.secoes.filter((secao: Secao) => secao.getFilme() == this.filme);
    this.dataEmCartaz = this.cineService.getDatasEmCartazString(this.filme.dataLancamento);
    this.categorias = this.filme.categorias;

    this.imgUrl = `https://image.tmdb.org/t/p/w500/${this.filme.poster}`;
    
  }
}
