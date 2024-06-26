import { Component } from '@angular/core';
import { Filme } from 'src/app/entities/Filme';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public filmes:any


  constructor(private service: CineService){
    
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
      this.filmes = this.service.filmes;
    });
  }
}
