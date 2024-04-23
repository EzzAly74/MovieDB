import { MovieService } from './../services/movie.service';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}

  nowPlayingMovies: any = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  movieCategories: any = [];
  movieDetails: any = [];

  ngOnInit() {
    this.movieService.getNowPlaying().subscribe({
      next: (res) => {
        this.nowPlayingMovies = res.results;

        this.movieService
          .getMovieDetailsById(this.nowPlayingMovies[0].id)
          .subscribe({
            next: (res) => {
              this.movieDetails = res;
              this.movieCategories = res.genres;
              console.log(res);
            },

            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  convertToHours(num: number) {
    return `0${Math.floor(num / 60)}:${num % 60}:00`;
  }

  numberRound(num: number) {
    return num.toFixed(2);
  }
}
