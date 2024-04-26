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
  allGeneries?:any = [];
  currentGenres: any;
  imgPath : string = imgPath;
  @Input() MovieId?: any = "";

  constructor(private trending: TrendingService, private _MovieService: MovieService) {}

  ngOnInit(): void {
    this.getTrending();
  }

  public getTrending() {
    this.trending.getTrending().subscribe({
      next: res => {
        this.allTrending = res.results;
        for (let i = 0; i < this.allTrending.length; i++) {
          this.getGenereById(this.allTrending[i].id);
          this.allGeneries[i] = this.currentGenres;        
        }
        // console.log("all generies is : ");
        // console.log(this.allGeneries);
      
        this.viewTrending = this.allTrending.slice(0, 3);
        // console.log(this.allTrending);
      },
      error: err => {
        // console.log(err);
      }
    })
  }

  public getGenereById(id: any) {
    this._MovieService.getMovieDetailsById(id).subscribe({
      next: res => {
        this.currentGenres = res.genres;
      },
      error: err => {
        console.log(err);
        // return   {
        //     "name": "No Details"
        // };
      }
    })
  }
}
