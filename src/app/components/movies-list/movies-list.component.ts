import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './../../interfaces/movie-list.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() list: Array<Movie>
  constructor() {}

  ngOnInit() {
  }

}
