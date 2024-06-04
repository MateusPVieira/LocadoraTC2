import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/entities/Categoria';
import { Filme } from 'src/app/entities/Filme';
import { Linguagem } from 'src/app/entities/Linguagem';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.component.html',
  styleUrls: ['./cartaz.component.scss']
})
export class CartazComponent {
  @Input() filme: Filme = new Filme(0, new Linguagem("", ""), "", "", 0, "", 0, 0, 0, "", []);
  @Output() details = new EventEmitter(false);
  public imgUrl: string = "";
  public dataEmCartaz: any = ""
  public categorias: Categoria[] = []
 


  constructor(private service: CineService){}

  ngOnInit(){
    this.imgUrl =`https://image.tmdb.org/t/p/w500/${this.filme.poster}`
    this.dataEmCartaz = this.service.getDatasEmCartazString(this.filme.dataLancamento);
    this.categorias = this.filme.categorias;
  }

  onDetails(){
    this.details.emit(this.filme);
  }
}
