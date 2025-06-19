import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { PriceCatalogComponent } from '../../components/price-catalog/price-catalog.component';
import { PriceDetailComponent } from '../../components/price-detail/price-detail.component';
import { PromoBannerComponent } from '../../components/promo-banner/promo-banner.component';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PriceCatalogComponent,
    PriceDetailComponent,
    PromoBannerComponent,
  ]
})
export class PricingPageComponent implements OnInit {
  price_catalog_list = [
    {
      name: 'Basic',
      price: '$9.99',
      features: ['1 Load per week', 'No pickup', 'Standard detergent'],
      popular: false
    },
    {
      name: 'Standard',
      price: '$19.99',
      features: ['3 Loads per week', 'Home pickup', 'Scented detergent'],
      popular: true
    },
    {
      name: 'Premium',
      price: '$29.99',
      features: ['Unlimited Loads', 'Pickup & Delivery', 'Premium softener'],
      popular: false
    },
    {
      name: 'Business',
      price: '$49.99',
      features: ['For commercial use', 'Custom scheduling', 'Invoice billing'],
      popular: false
    }
  ];

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
    // puedes agregar más
  ];
  constructor() { }

  ngOnInit() {
  }

}
