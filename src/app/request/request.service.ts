import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDefaultAPIResponse, IMovieDetails, IMovieDetailsResponse } from '../types/main';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private root_endpoint = "https://api.themoviedb.org/3/"
  private endpoint = this.root_endpoint + "trending/movie/day";
  private movie_details_endpoint = this.root_endpoint + "movie/"
  private bearer_token: string = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjcyNGEzNDQxZGUwNGFmN2QyNmNjMDJhMWM0ZjAwOCIsInN1YiI6IjY1MzE3ODVkZWZlMzdjMDEzYjQ1N2NkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qYv6COqVSdI68AF0ndDQpxy5rZNz4eZoBzSm08s12aA";
  private current_page = 0;
  private search_endpoint = this.root_endpoint + "search/movie";
  public search_value = ''
  public peopleList: IMovieDetails[] = [];

  defaultSearchValue: string = '';


  constructor(private http: HttpClient) { 
  }

  requestConfigFn<T>(endpoint: string, fresh: boolean, has_page = true, query?: string) {
    if (fresh) {
      this.current_page = 1
    }else{
      this.current_page++
    }

    const params: any = {
      language: "en-US",
    }
    has_page && (params.page = this.current_page);
    query && (params.query = query);


    return this.http.get<T>(endpoint, {
      params,
      headers: {
        "Authorization": this.bearer_token,
      }
    }); 
  }

  fetchMovies (fresh = false) {
    return this.requestConfigFn<IDefaultAPIResponse>(this.endpoint, fresh)
  }

  fetchMovieDetails (movie_id: number) {
    return this.requestConfigFn<IMovieDetailsResponse>(this.movie_details_endpoint + movie_id, false)
  }

  searchMovies (fresh = true) {
    return this.requestConfigFn<IDefaultAPIResponse>(this.search_endpoint, fresh, true, this.search_value)
  }
}
