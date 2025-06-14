import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceAdvantagesComponent } from '../../components/service-advantages/service-advantages.component';
import { BannerColorComponent } from '../../components/banner-color/banner-color.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    HeroComponent,
    ServiceAdvantagesComponent,
    BannerColorComponent,
  ]
})
export class AboutComponent implements OnInit {

  heroOurHistory = {
    title: 'WELCOME TO LAUNDRYES',
    titleDescription: 'This template is designed with a unique and simple, so that it can promote and laundry business solution.',
    imageUrl: 'http://html.rudhisasmito.com/laundryes/images/about_history-u24541-fr.jpg',
    alt: 'Lavandería',
    contentTitle: 'OUR HISTORY',
    contentText: `This template is a micro niche for business categories, namely laundry business. there was an excess of this template is using adobe muse making it easier to edit, add content, and without having to use the coding in the edit.

    This template is designed with a unique and simple, so that it can promote and laundry business. This template can be an alternative for entrepreneurs engaged in the laundry. or could be an alternative for web developers who need to design websites laundry kategory business.
    As for the advantages of this template is multipage template which consists of a homepage, about page, services page, pricing page, faq page, blog and contact page. so that it can describe all the requirements needed for a business website.`
  };

  heroDiscover = {
  title: 'DISCOVER LAUNDRYES',
  titleDescription: 'Innovative laundry solutions designed for convenience and quality.',
  imageUrl: 'images/discover.jpg',
  alt: 'Laundry Service',
  contentTitle: 'OUR JOURNEY',
  contentText: `At LaundryES, we are committed to providing the best laundry experience through cutting-edge technology and personalized service.

  Our business is built on trust and excellence, aiming to simplify your life by taking care of your laundry needs efficiently and responsibly.

  With a comprehensive range of services, flexible scheduling, and eco-friendly products, LaundryES is your go-to partner for spotless and fresh clothes every day.`
};

  advantagesList = [
    {
      icon: 'visibility',
      title: 'OUR VISION',
      description: 'Our templates price really affordable. Only $21 for one beautiful template, you will get free updates and awesome support from us. Still thinking to buy?'
    },
    {
      icon: 'flag',
      title: 'OUR MISSION',
      description: 'Of course this is Muse templates, you don\'t need to write code to edit, you just need to drag and drop your images and change like Photoshop. Easy Right!'
    },
    {
      icon: 'build',
      title: 'OUR STRENGTHS',
      description: 'Easy to edit color, font, icon, or customizable layout. You can edit with the tool in Adobe Muse. Everything easy to change and edit.'
    },
    {
      icon: 'support_agent',
      title: 'OUR SUPPORT',
      description: 'We provide friendly and reliable customer support to assist you anytime with your template needs and questions.'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
