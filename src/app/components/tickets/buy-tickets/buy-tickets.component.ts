import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/entities/Filme';
import { Linguagem } from 'src/app/entities/Linguagem';
import { CineService } from '../../../services/cine.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent {
  constructor(){

  }

  ngOnInit(){

  }
}
