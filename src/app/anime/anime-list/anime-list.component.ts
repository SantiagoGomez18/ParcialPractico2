import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  totalEpisodios: number = 0;
  ratingPromedio: number = 0;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calcularRatingPromedio();
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  calcularRatingPromedio(): void {
    let totalRating = 0;
    let totalEpisodios = 0;

    this.animes.forEach((anime) => {
      totalEpisodios += anime.episode;
      totalRating += parseFloat(anime.Rating);
    });

    this.ratingPromedio = totalRating / this.animes.length;

  }

  ngOnInit() {
    this.getAnimes();
  }

}
