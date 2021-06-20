import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    { img: "https://via.placeholder.com/600.png/09f/fff" },
    { img: "https://via.placeholder.com/600.png/021/fff" },
    { img: "https://via.placeholder.com/600.png/321/fff" },
    { img: "https://via.placeholder.com/600.png/422/fff" },
    { img: "https://via.placeholder.com/600.png/654/fff" }
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  constructor() { }

  ngOnInit(): void {
  }

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
