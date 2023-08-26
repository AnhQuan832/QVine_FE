import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  protected data = [
    "../../../../assets/imgs/food_bg_1.jpeg",
    "../../../../assets/imgs/food_bg_2.jpeg",
    "../../../../assets/imgs/food_bg_3.jpg"
  ]
}
