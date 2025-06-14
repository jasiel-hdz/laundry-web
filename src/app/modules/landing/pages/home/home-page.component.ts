import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HomeSlideComponent } from '../../components/home-slide/home-slide.component';
import { ServiceAdvantagesComponent } from '../../components/service-advantages/service-advantages.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { BannerColorComponent } from '../../components/banner-color/banner-color.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { OurSocialNetworksComponent } from '../../components/our-social-networks/our-social-networks.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatIconModule,
        HomeSlideComponent,
        ServiceAdvantagesComponent,
        OurServicesComponent,
        BannerColorComponent,
        TestimonialsComponent,
        OurSocialNetworksComponent,
    ],

})
export class HomePageComponent {
    advantagesList = [
        {
            icon: 'local_laundry_service',
            title: 'EXPERT CLEANER',
            description: 'We give our best work for this template. We make with a love. Our template have different style and layout in every each.'
        },
        {
            icon: 'attach_money',
            title: 'AFFORDABLE PRICE',
            description: 'Our templates price really affordable. Only $21 for one beautiful templates, you will get free update and awesome support.'
        },
        {
            icon: 'local_shipping',
            title: 'EXPRESS DELIVERY',
            description: 'Yes it\'s right! If you already purchased this template you will get free access to get a new template every our update launch.'
        },
        {
            icon: 'verified',
            title: 'GUARANTEE',
            description: 'Of course this is Muse templates, you don\'t need to write code to edit, you just need to drag and drop your images.'
        }
    ];
    constructor() { }
}
