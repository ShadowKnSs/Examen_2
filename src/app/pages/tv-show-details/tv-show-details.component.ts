import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent {
  show: Show | null = null;

  constructor(private route: ActivatedRoute, private tvShowService: TvShowService, private router: Router) {
    const name = this.route.snapshot.paramMap.get("name") || "";
    const result = this.tvShowService.shows.find(s => s.name === name);
    if (!result) {
      this.router.navigate(['/not-found']);
    } else {
      this.show = result;
    }
  }
}
