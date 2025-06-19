import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-price-catalog',
  templateUrl: './price-catalog.component.html',
  styleUrls: ['./price-catalog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class PriceCatalogComponent implements OnInit {
  @Input() title: string = 'Pricing Plans';
  @Input() subtitle: string = 'Choose the plan that suits you best';
  @Input() catalog: Array<{
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }> = [];
  selectedCatalogIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  selectCatalog(index: number) {
    this.selectedCatalogIndex = index;
  }
}
