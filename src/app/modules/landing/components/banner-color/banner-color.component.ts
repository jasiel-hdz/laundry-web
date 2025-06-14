import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-banner-color',
  templateUrl: './banner-color.component.html',
  styleUrls: ['./banner-color.component.css'],
  standalone: true,
  imports: [
    MatIcon,
    CommonModule,
  ]
})
export class BannerColorComponent implements OnInit {
  @Input() withMargin: boolean =  false;
  constructor() { }

  ngOnInit() {
  }

}
