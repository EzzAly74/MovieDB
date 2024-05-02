import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})

export class TrendingService {
  baseUrl:string = 'https://api.themoviedb.org/3';

  params:any = {
    api_key: "c86076a9568df4a4395e1879c7d55cae"
  }

  constructor(private http:HttpClient) {}
  
  public getTrending() : Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/week`, {
      params: this.params
    })
  }
}
