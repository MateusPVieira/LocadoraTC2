import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  get stars() {
    return Array(Math.floor(this.rating/2)).fill(0);
  }
}
