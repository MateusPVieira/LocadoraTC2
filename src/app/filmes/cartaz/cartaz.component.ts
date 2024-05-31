import { Component, Input } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.component.html',
  styleUrls: ['./cartaz.component.scss']
})
export class CartazComponent {
  @Input() filme: any

  public imgUrl: string = "";
  public dataEmCartaz: any = ""
  public generos: string[] = []
  private qtddMaxGenerosExibida: number = 3;


  constructor(private service: CineService){}

  ngOnInit(){
    this.imgUrl =`https://image.tmdb.org/t/p/w500/${this.filme.poster_path}`
    this.dataEmCartaz = this.service.getDatasEmCartazString(this.filme.release_date)
    this.generos = this.service.getGenerosNames(this.filme.genre_ids, this.qtddMaxGenerosExibida);
  }
}
