import { RuntimeMoviePipe } from './pipes/runtime-movie.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingComponent } from './trending/trending.component';
import { ReleaseMoviesComponent } from './release-movies/release-movies.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { VoteAvgPipe } from './pipes/vote-avg.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [AppComponent,HomeComponent, NavbarComponent, TrendingComponent, ReleaseMoviesComponent, MovieComponent],
  imports: [
    // Modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Modules for Prime Ng
    ButtonModule,
    CarouselModule,
    
    // pipes
    VoteAvgPipe,
    RuntimeMoviePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
