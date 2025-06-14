import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    HeroComponent,
  ]
})
export class ServicesComponent implements OnInit {
  heroServiceSections = [
    {
      title: 'OUR SERVICES',
      titleDescription: 'Clean, dry, and perfectly folded clothes ready for pickup or delivery.',
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-1.jpg',
      alt: 'Wash and Fold',
      contentTitle: 'QUICK & NEAT',
      contentText: `Maecenas gravida diam purus, ac posuere felis maximus a. Pellentesque leo elit, laoreet non quam ac, faucibus facilisis mauris. Praesent egestas volutpat ipsum. Sed et ornare risus, non bibendum dolor. Integer semper neque ut faucibus malesuada. Pellentesque tincidunt, tellus a aliquet condimentum, urna lacus porta nibh, at imperdiet elit nisl vitae orci. Duis laoreet justo consectetur justo elementum condimentum. Morbi congue bibendum turpis quis porta. Nulla luctus pellentesque ante, id ultrices eros ullamcorper ac. Aliquam ac metus sed nisl rhoncus congue et quis augue. Donec faucibus quam eu nunc auctor porta. Suspendisse vehicula lacus nec diam viverra, vel rutrum tellus cursus. Nunc rhoncus quis enim id ultrices. Maecenas semper tincidunt nulla, eu maximus tortor ultricies vel. In varius, mauris non lobortis faucibus, neque nibh ultrices massa, quis hendrerit dolor est eget risus. Suspendisse eu vulputate diam.`,
      direction: 'left',
      class: ''
    },
    {
      title: null,
      titleDescription: null,
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-2.jpg',
      alt: 'Dry Cleaning',
      contentTitle: 'DELICATE CARE',
      contentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id cursus leo. Maecenas magna dolor, consequat eu diam eu, varius condimentum justo. Maecenas condimentum orci eu efficitur aliquet. Donec fringilla pulvinar iaculis. Ut pulvinar dapibus massa, eget hendrerit mi volutpat at. Donec ut egestas justo. Donec at laoreet mi. Vivamus tincidunt tristique quam, et fringilla dolor vestibulum eu.`,
      direction: 'right',
      class: ''
    },
    {
      title: null,
      titleDescription: null,
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-3.jpg',
      alt: 'Laundry Delivery',
      contentTitle: 'STAY COMFORTABLE',
      contentText: `Nulla ultricies pretium ante a fermentum. Etiam consectetur vel mauris id aliquam. Aliquam sit amet tristique arcu. Nunc venenatis sit amet felis vitae scelerisque. In a convallis nibh. Pellentesque at massa eu eros ullamcorper interdum. Integer porta eget ex vitae scelerisque. Nam maximus ultricies lacinia.`,
      direction: 'left',
      class: ''
    },
    {
      title: null,
      titleDescription: null,
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-4.jpg',
      alt: 'Commercial Laundry',
      contentTitle: 'BUSINESS READY',
      contentText: `Duis vitae convallis ex, a efficitur nisl. Aenean est est, tincidunt et lectus at, lacinia feugiat neque. Aliquam erat volutpat. Vestibulum at elit in magna ullamcorper faucibus. Aenean ac risus posuere, interdum mi at, lacinia nisi. Phasellus congue posuere dolor, eu aliquam est dictum sit amet. Fusce a nisi quis nibh cursus aliquam nec nec lacus. Ut felis lacus, tristique vel neque pharetra, hendrerit pretium est. Vestibulum rutrum, sapien a pellentesque cursus, lectus risus pretium leo, nec ultrices turpis mi vel magna. Suspendisse sagittis aliquet turpis vel malesuada. Curabitur ac volutpat massa, a iaculis velit. Suspendisse potenti.`,
      direction: 'right',
      class: ''
    },
    {
      title: null,
      titleDescription: null,
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-5.jpg',
      alt: 'Ironing Service',
      contentTitle: 'LOOK SHARP',
      contentText: `Vivamus id ligula eu lectus porta condimentum. Proin efficitur lorem ac mattis luctus. Aliquam erat volutpat. Suspendisse nec augue tincidunt, dictum ex a, sagittis magna. Ut eget nulla nec lorem tempus imperdiet. Pellentesque condimentum tortor ac velit mollis, eget ornare arcu molestie. Cras egestas at neque eu dignissim. Morbi et orci porttitor, mollis diam in, bibendum metus. Nullam ac vulputate sem, quis mollis tortor. Mauris in quam nibh. Curabitur tincidunt eget neque quis placerat. In eu condimentum ante. Vestibulum facilisis enim eu mauris ullamcorper accumsan. Phasellus ligula neque, elementum in nibh venenatis, suscipit consectetur erat.`,
      direction: 'left',
      class: ''
    },
    {
      title: null,
      titleDescription: null,
      imageUrl: 'http://html.rudhisasmito.com/laundryes/images/services-img-6.jpg',
      alt: 'Express Laundry',
      contentTitle: 'FAST & EFFICIENT',
      contentText: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida suscipit massa, et blandit nisl auctor a. Mauris odio nibh, volutpat quis felis ut, condimentum euismod est. Sed eget dolor ut augue molestie pretium vitae et metus. Aliquam erat volutpat. Vivamus tristique consectetur congue. Vestibulum laoreet accumsan eros, luctus imperdiet nisi gravida vel. Suspendisse enim arcu, lobortis vel arcu et, porta mollis ipsum. Etiam nisl augue, pellentesque vel orci vel, condimentum sodales neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur interdum pretium pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas rutrum ultrices quam.`,
      direction: 'right',
      class: 'mb-8 md:mb-32'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
