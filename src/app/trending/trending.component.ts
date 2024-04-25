import { Component, Input, Output, input, output } from '@angular/core';
import { TrendingService } from '../services/trending.service';
import { imgPath } from 'src/main';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  allTrending?: any = [];
  viewTrending?: any = []; 
  imgPath : string = imgPath;
  @Input() MovieId?: any = "";
  currentGenres?: any = [];
  constructor(private trending: TrendingService, private _MovieService: MovieService) {
  }
  ngOnInit(): void {
    this.getTrending();
  }

  public getTrending() {
    this.trending.getTrending().subscribe({
      next: res => {
        this.allTrending = res.results;
        this.viewTrending = this.allTrending.slice(0, 3);
        console.log(this.allTrending);
      },
      error: err => {
        console.error(err);
      }
    })
  }

  public getGenereById(id: any) {
    this._MovieService.getMovieDetailsById(id).subscribe({
      next: async res => {
        this.currentGenres = await res.genres;
        console.log("currentGenres is ");
        console.log(this.currentGenres);
        return this.currentGenres;
      },
      error: err => {
        console.error(err);
        return [];
      }
    })
    return [];
  }
}
