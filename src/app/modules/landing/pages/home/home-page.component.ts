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
    /**
     * Constructor
     */
    constructor() {}
}
