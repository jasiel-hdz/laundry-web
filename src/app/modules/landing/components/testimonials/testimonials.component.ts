import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      img: 'https://dtdrycleaning.wpengine.com/wp-content/uploads/2017/04/testimonial-1.jpg',
      titulo: 'Ana Martínez',
      comentario: 'Excelente servicio, muy rápido y profesional. Recomiendo totalmente esta lavandería.'
    },
    {
      img: 'https://dtdrycleaning.wpengine.com/wp-content/uploads/2017/04/testimonial-2.jpg',
      titulo: 'Luis Gómez',
      comentario: 'La atención al cliente fue de primera y dejaron mi ropa impecable.'
    },
    {
      img: 'https://dtdrycleaning.wpengine.com/wp-content/uploads/2017/04/testimonial-3.jpg',
      titulo: 'María López',
      comentario: 'Siempre confío en ellos para mis prendas delicadas, ¡los mejores!'
    },
    {
      img: 'https://dtdrycleaning.wpengine.com/wp-content/uploads/2017/04/testimonial-4.jpg',
      titulo: 'Carlos Ramírez',
      comentario: 'Muy cumplidos con las entregas y gran calidad de limpieza.'
    }
  ];

  selectedIndex = 0;

  get selectedTestimonial() {
    return this.testimonials[this.selectedIndex];
  }

  constructor() { }

  ngOnInit() {
  }

  selectTestimonial(index: number): void {
    this.selectedIndex = index;
  }

}
