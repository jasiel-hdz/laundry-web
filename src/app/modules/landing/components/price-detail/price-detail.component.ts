import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class PriceDetailComponent implements OnInit {
  @Input() title : string = '';
  @Input() subtitle : string = '';

  priceDetailList = [
    {
      title: 'Dry Cleaning',
      features: [
        { name: 'Shirt', price: '$2.00' },
        { name: 'Pants', price: '$3.00' },
        { name: 'Jacket', price: '$5.00' },
        { name: 'Dress', price: '$6.50' }
      ]
    },
    {
      title: 'Laundry Service',
      features: [
        { name: '1 Load', price: '$7.00' },
        { name: '2 Loads', price: '$13.00' },
        { name: 'Pickup & Delivery', price: '$5.00' },
        { name: 'Express Service', price: '$10.00' }
      ]
    },
    {
      title: 'Dry Cleaning',
      features: [
        { name: 'Shirt', price: '$2.00' },
        { name: 'Pants', price: '$3.00' },
        { name: 'Jacket', price: '$5.00' },
        { name: 'Dress', price: '$6.50' }
      ]
    },
    {
      title: 'Laundry Service',
      features: [
        { name: '1 Load', price: '$7.00' },
        { name: '2 Loads', price: '$13.00' },
        { name: 'Pickup & Delivery', price: '$5.00' },
        { name: 'Express Service', price: '$10.00' }
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
