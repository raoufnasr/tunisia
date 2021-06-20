import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    { img: "../../../../assets/slide/1.jpg" },
    { img: "../../../../assets/slide/2.jpg" },
    { img: "../../../../assets/slide/3.jpg" },
    { img: "../../../../assets/slide/4.jpg" },
    { img: "../../../../assets/slide/5.jpg" },
    { img: "../../../../assets/slide/6.jpg" },
    { img: "../../../../assets/slide/7.jpg" },
    { img: "../../../../assets/slide/8.jpg" },
    { img: "../../../../assets/slide/9.jpg" },
    { img: "../../../../assets/slide/10.jpg" },
    { img: "../../../../assets/slide/11.jpg" },
    { img: "../../../../assets/slide/12.jpg" },
    { img: "../../../../assets/slide/13.jpg" },
    { img: "../../../../assets/slide/14.png" },
    { img: "../../../../assets/slide/15.jpg" },

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
