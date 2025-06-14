import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [
    MatIcon,
  ]

})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
