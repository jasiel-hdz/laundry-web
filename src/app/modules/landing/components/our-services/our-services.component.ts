import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
  imports: [CommonModule]
})
export class OurServicesComponent implements OnInit {
  laundryItems = [
    {
      title: 'COIN LAUNDRY',
      description: 'Yes! Our templates already for desktop, tablet and mobile layout versions.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-1.jpg'
    },
    {
      title: 'CREDENTIAL LAUNDRY',
      description: 'We give you good documentation to make easy to understand.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-2.jpg'
    },
    {
      title: 'BUSINESS LAUNDRY',
      description: 'Create and publish dynamic websites for desktop and mobile devices.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-3.jpg'
    },
    {
      title: 'COIN LAUNDR',
      description: 'Yes! Our templates already for desktop, tablet and mobile layout versions.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-1.jpg'
    },
    {
      title: 'CREDENTIAL LAUNDRY',
      description: 'We give you good documentation to make easy to understand.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-2.jpg'
    },
    {
      title: 'BUSINESS LAUNDRY',
      description: 'Create and publish dynamic websites for desktop and mobile devices.',
      img: 'http://html.rudhisasmito.com/laundryes/images/home-service-img-3.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
