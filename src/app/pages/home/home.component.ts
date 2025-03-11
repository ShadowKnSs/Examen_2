import { Component } from '@angular/core';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { Show } from '../../interfaces/show.interface';
import { CommonModule } from '@angular/common';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-home',
  imports: [ShowCardComponent, ControlsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = "";

  constructor(public tvShowsService: TvShowsService) {
    this.title = this.tvShowsService.title;
  }

  deleteByIndex(index: number): void {
    this.tvShowsService.shows.splice(index, 1);
  }

  deleteLast(): void {
    this.tvShowsService.shows.pop();
  }

  orderByName(): void {
    this.tvShowsService.shows.sort((a, b) => a.name.localeCompare(b.name));
  }

  deleteByName(name: string): void {
    const index = this.tvShowsService.shows.findIndex(show => show.name === name);
    if (index != -1)
      this.deleteByIndex(index);
  }

}
