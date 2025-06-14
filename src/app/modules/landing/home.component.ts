import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { RouterOutlet } from '@angular/router';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone   : true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NavbarLandingComponent,
    RouterOutlet,
    FooterMenuComponent,
  ]
})
export class LandingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
