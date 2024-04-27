import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() sKeyUp = new EventEmitter();

  constructor (protected request: RequestService) {
    
  }

  handleChange (ev: any) {
    this.request.defaultSearchValue = ev.target.value
  }
}
