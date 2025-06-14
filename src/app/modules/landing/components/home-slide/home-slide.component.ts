import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
  ],
})
export class HomeSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
