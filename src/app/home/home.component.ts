import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { IMovieDetails } from '../types/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  next_page: string = ""
  typeTracking: any = -1

  @Input() defaultMovies: IMovieDetails[] = []

  constructor (public request: RequestService) {
    
  }

  ngOnInit(): void {
    if (this.request.peopleList.length == 0) {
      this.request.fetchMovies().subscribe(data => {
        console.log(data);
        this.request.peopleList = data.results;
      })      
    }

    window.onscroll = (e) => this.handleScroll(e)
  }

  handleKeyUp (ev: KeyboardEvent) {
    clearTimeout(this.typeTracking)
    console.log("keyup event fired");
    
    const value = (ev.target as HTMLInputElement | null)?.value

    this.request.search_value = value as string
    this.typeTracking = setTimeout(() => {
      if (value === '') {
        this.request.fetchMovies(true).subscribe(data => this.request.peopleList = data.results)
      }else{
        this.request.searchMovies().subscribe(data => this.request.peopleList = data.results)
      }
      console.log("user finished typing", value);
    }, 300);
  }

  handleScroll (ev: Event) {
    const homeContainerHeight = document.querySelector("#home-root")?.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    if (scrollTop >= scrollHeight && homeContainerHeight != undefined) {
      if (this.request.search_value !== '') {
        this.request.searchMovies(false).subscribe(data => this.request.peopleList = [...this.request.peopleList, ...data.results])
      }else{
        this.request.fetchMovies().subscribe(data => this.request.peopleList = [...this.request.peopleList, ...data.results])
      }
    }
  }

}
