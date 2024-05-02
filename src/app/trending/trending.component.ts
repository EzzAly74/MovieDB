import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
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
  imgPath : string = imgPath;
  runtimes: number[] = [];
  @Input() MovieId?: any = "";
  elems:  any;
  

  constructor(private trending: TrendingService, private _MovieService: MovieService) {}

  ngOnInit(): void {
    this.getTrending();
    this.allGeneres();
    this.scrollButtonContainerToEnd();
  }

  public scrollButtonContainerToEnd() {
    window.addEventListener("load", ()=> {
      let buttonContainer = document.querySelectorAll(".generes.btns") as NodeListOf<Element>;
      
      buttonContainer.forEach((el:Element) => {
        console.log(el);
        el.scrollBy({left: 100})
      })
    })
  }

  public getTrending() {
    this.trending.getTrending().subscribe({
      next: res => {
        this.allTrending = res.results;
        this.viewTrending = this.allTrending.slice(0, 3);    
        this.allTrending.forEach((movie: any) => {
          this._MovieService.getMovieDetailsById(movie.id).subscribe({
            next: res => {
              this.runtimes.push( res.runtime );
            },
            error: err => {
              console.log(err);
            }
          })
        });
        
      },
      error: err => {
        console.log(err);
      }
    })
  }

  public getMovieDetailsById(id: string) {
    this._MovieService.getMovieDetailsById(id).subscribe({
      next: res => {
        this.runtimes.push( res.runtime );
      },
      error: err => {
        console.log(err);
      }
    })
  }

  public allGeneres() {
    this._MovieService.getAllgenres().subscribe({
      next: (res) => {
        this.allGeneries = res.genres;
        console.log("all generies is : ");
        console.log(this.allGeneries);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
