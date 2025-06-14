import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-banner-color',
  templateUrl: './banner-color.component.html',
  styleUrls: ['./banner-color.component.css'],
  standalone: true,
  imports: [
    MatIcon,
  ]
})
export class BannerColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
