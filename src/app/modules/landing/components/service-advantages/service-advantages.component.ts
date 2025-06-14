import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-service-advantages',
  templateUrl: './service-advantages.component.html',
  styleUrls: ['./service-advantages.component.css'],
  standalone: true,
  imports: [
    MatIcon,
  ]
})
export class ServiceAdvantagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
