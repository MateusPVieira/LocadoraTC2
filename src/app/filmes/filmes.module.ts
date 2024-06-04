import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetailsComponent } from './details/details.component';
import { CartazComponent } from './cartaz/cartaz.component';
import { FilmesRoutingModule } from './filmes-routing.module';
import { MaterialModule } from '../core/shared/material/material.module';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    ListaFilmesComponent,
    CartazComponent
  ],
  imports: [
    StarRatingComponent,
    DetailsComponent,
    CommonModule,
    FilmesRoutingModule,
    MaterialModule
  ],
  exports: [
    StarRatingComponent,
    DetailsComponent
  ]
})
export class FilmesModule { }
