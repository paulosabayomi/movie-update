import { Component, Input } from '@angular/core';
import { IMovieDetails } from '../types/main';
import { MainService } from '../main.service';

@Component({
  selector: 'app-uicard',
  templateUrl: './uicard.component.html',
  styleUrl: './uicard.component.css'
})
export class UicardComponent {
  @Input() person: IMovieDetails | undefined;

  constructor(public mainService: MainService){

  }

  

  
}
