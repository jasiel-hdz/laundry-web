import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutComponent } from './pages/about/about.component';

export default [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutComponent, 
    }
] as Routes;
