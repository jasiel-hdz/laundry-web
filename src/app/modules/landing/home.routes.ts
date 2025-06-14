import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

export default [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutComponent, 
    },
    {
        path: 'services',
        component: ServicesComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'pricing',
        component: PricingComponent,
    }
] as Routes;
