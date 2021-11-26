import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../interfaces/movie-list.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

interface UserComment {
  name: string,
  message: string
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }

  id: Number
  movie: Movie
  comments: Array<UserComment> = []
  commentsForm: FormGroup


  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.moviesService.getMovieData()
    .subscribe(res => {
      this.movie = res.find(d => d.id === this.id)
    });
    
    this.commentsForm = new FormGroup({
      message: new FormControl({value: '', disabled: false}, Validators.required),
      name: new FormControl({value: '', disabled: false}, Validators.required),
      });
  }

  setComment(event){
    this.commentsForm.controls.message.setValue(event.target.value)
  }

  setName(event){
    this.commentsForm.controls.name.setValue(event.target.value)
  }

  addComments(){
    let comment = <UserComment>{}
    comment.message = this.commentsForm.controls.message.value
    comment.name = this.commentsForm.controls.name.value
    this.comments.push(comment)
    this.commentsForm.reset()
  }
}
