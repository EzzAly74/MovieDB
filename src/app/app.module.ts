import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { TrendingComponent } from './trending/trending.component';
import { ReleaseMoviesComponent } from './release-movies/release-movies.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { VoteAvgPipe } from './pipes/vote-avg.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [AppComponent, NavbarComponent, TrendingComponent, ReleaseMoviesComponent, MovieComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, HttpClientModule, VoteAvgPipe, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
