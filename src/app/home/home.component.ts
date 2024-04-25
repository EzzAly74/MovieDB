import { imgPath } from 'src/main';
import { MovieService } from './../services/movie.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}

  nowPlayingMovies: any = [];
  imgPath: string = imgPath;
  movieCategories: any = [];
  movieDetails: any = [];
  topMovies: any = [];
  allGenres: any[] = [];
  movieGenres: any = [];
  runtimeNow?: any;

  ngOnInit() {
    this.movieService.getNowPlaying().subscribe({
      next: (res) => {
        this.nowPlayingMovies = res.results;
        // this.movieGenres = res.results[0].genre_ids;
        this.topMovies = res.results.slice(0, 5);

        console.log(this.movieGenres);

        console.log('top movies =>');
        console.log(this.topMovies);

        this.movieService
          .getMovieDetailsById(this.nowPlayingMovies[0].id)
          .subscribe({
            next: (res) => {
              this.movieDetails = res;
              this.movieCategories = res.genres;
              // console.log(res);
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
    // this.productId = this.getMovieGenresById(this.productId);

    this.movieService.getAllgenres().subscribe({
      next: (res) => {
        this.allGenres = res.genres;
        console.log(this.allGenres);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getMovieTimeById(id: number) {
    this.movieService.getMovieDetailsById(id).subscribe({
      next: (res) => {
        return res.runtime;
      },

      error: (err) => {
        return err;
      },
    });
  }

  getGenreNameById(id: number) {
    const genre = this.allGenres.find((genre) => genre.id === id);
    return genre ? genre.name : null;
  }
  convertToHours(num: number) {
    return `0${Math.floor(num / 60)}:${num % 60}:00`;
  }

  numberRound(num: number) {
    return num.toFixed(2);
  }
}
