import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.css'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class PromoBannerComponent implements OnInit {
  @Input() title: string = 'Limited Time Offer!';
  @Input() btnText: string = 'Lorem Ipsum';
  @Input() imageUrl: string = '/assets/images/default-promo.jpg';
  @Input() alt: string = 'Promotional Image';
  @Input() reverse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
