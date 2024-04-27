import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request/request.service';
import { IMovieDetailsResponse } from '../types/main';
import { MainService } from '../main.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie_id: number = -1;

  movieDetails: IMovieDetailsResponse | undefined;

  constructor (
    private route: ActivatedRoute, 
    private request: RequestService,
    public mainService: MainService
    ) {
    this.movie_id = parseInt(this.route.snapshot.paramMap.get('movieId') || '0')
  }

  ngOnInit(): void {
      this.request.fetchMovieDetails(this.movie_id).subscribe(data => this.movieDetails = data)
  }

  


}
