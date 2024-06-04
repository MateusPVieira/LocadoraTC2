import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/entities/Filme';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent {
  public filmes:any


  constructor(private service: CineService,
    private router: Router,
    private rout: ActivatedRoute
  ){
    
  }

  async ngOnInit(){
    (await this.service.getGeneros()).subscribe((data: any) => {
      this.service.generos = data.genres
    });

    (await this.service.getLanguages()).subscribe((data: any) => {
      this.service.linguagens = this.service.mountLanguages(data);
    });

    (await this.service.getFilmes()).subscribe((data: any) => {
      this.service.filmes = this.service.mountFilmes(data);
      this.filmes = this.service.filmesEmExibicao;
    });
  }

  onBuy(filme: Filme){
    this.service.sendDetails(filme)
    this.router.navigate(['/buyTicket']);
  }
  onError(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
