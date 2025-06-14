import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class HeroComponent implements OnInit {

  @Input() title: string = '';
  @Input() titleDescription: string = '';
  @Input() imageUrl: string = '';
  @Input() alt: string = 'Imagen';
  @Input() contentTitle: string = '';
  @Input() contentText: string = '';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() class: string = '';
  @Input() withMargin: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
