import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestService } from './request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'starwars';

  constructor (private request: RequestService) {
    
  }

}
