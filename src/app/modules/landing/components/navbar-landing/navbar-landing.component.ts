import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  standalone: true,
  styleUrls: ['./navbar-landing.component.css'],
  imports: [
    MatIconModule,
    RouterModule,
    // RouterLink,
  ]
})
export class NavbarLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

}
