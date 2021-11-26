import { Component, OnInit } from '@angular/core';
import { Movie } from './../../interfaces/movie-list.interface';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  movies: Array<Movie> = []
  results: Array<Movie> = []
  ngOnInit() {
    this.moviesService.getMovieData()
    .subscribe(res => {
      this.movies = res;
      this.results = res;
    });
  }

  handleList(value){
      this.results = [...this.movies]
      this.results = this.movies.filter(m => m.film.includes(value))
  }

}
