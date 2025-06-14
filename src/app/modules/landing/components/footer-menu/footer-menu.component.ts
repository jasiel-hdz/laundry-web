import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
  ]
})
export class FooterMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTo(path:string):void {
    // this.navCtrl.navigateForward('/'+path);
  }
  goHome(): void {
    this.router.navigate(['/']);
  }

}
