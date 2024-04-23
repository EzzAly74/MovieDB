import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3';
  params: any = {
    api_key: '017e587b73b558aeca164c84108948ad',
  };

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/now_playing`, {
      params: this.params,
    });
  }
  getMovieDetailsById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?language=en-US`, {
      params: this.params,
    });
  }
}
