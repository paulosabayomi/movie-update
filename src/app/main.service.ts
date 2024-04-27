import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public image_base: string = "https://image.tmdb.org/t/p/original";

  constructor() { }

  getImageUrl (img: string | undefined) {
    return this.image_base + img
  }
}
