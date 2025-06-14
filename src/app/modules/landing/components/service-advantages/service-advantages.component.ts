import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-advantages',
  templateUrl: './service-advantages.component.html',
  styleUrls: ['./service-advantages.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
  ]
})
export class ServiceAdvantagesComponent implements OnInit {
  @Input() title?: string;
  @Input() titleDescription?: string;
  @Input() advantages: Advantage[] = [];

  constructor() { }

  ngOnInit() {
  }

}
