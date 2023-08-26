import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected data = [
    "../../../../assets/imgs/food_bg_1.jpeg",
    "../../../../assets/imgs/food_bg_2.jpeg",
    "../../../../assets/imgs/food_bg_3.jpg"
  ]
}
