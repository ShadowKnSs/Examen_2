import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-new-tv-show',
  imports: [],
  templateUrl: './new-tv-show.component.html',
  styleUrl: './new-tv-show.component.css'
})
export class NewTvShowComponent {

  title: string = "";

  constructor(private tvShowsService: TvShowsService) {
    this.tvShowsService.title = "Valor del servicio editado desde new tv show"
    this.title = this.tvShowsService.title;

    console.log(this.tvShowsService.shows);
  }
}
