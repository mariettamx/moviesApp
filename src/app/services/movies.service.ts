import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie-list.interface';
import { Observable, of } from 'rxjs';
import data from '../db/data.json'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  movies: Movie[]

  getMovieData() : Observable<Movie[]> {
      const movies = of(data);
      return movies;
  }
}
