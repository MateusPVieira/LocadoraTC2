import { Component } from '@angular/core';
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

  ngOnInit(){
     this.service.getFilmes().subscribe(
      (data:any) => {this.filmes = data.results}
    );
  }
}
