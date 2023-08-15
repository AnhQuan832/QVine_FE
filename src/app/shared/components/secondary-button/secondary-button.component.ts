import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent implements OnChanges {
  @Input() content: any;
  @Input() isLoading: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoading === true)
      this.content = "";
  }
}
