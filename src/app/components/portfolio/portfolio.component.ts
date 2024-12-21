import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  title: string = 'portfolio component';
  portfolioColor: string = '#2C3E50';
  imageSrc: string[] = [
    './assets/images/port1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/port1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
  isModel: boolean = false;
  imgSrc: string = '';

  open(secoElement: string): void {
    this.isModel = true;
    this.imgSrc = secoElement;
  }
  close(): void {
    this.isModel = false;
  }
  closeModel(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;
    this.isModel = false;
  }
}
