import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
