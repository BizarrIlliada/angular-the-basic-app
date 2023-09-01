import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() name: string;
  @Input() description: string;
  @Input('img') imagePath: string;
  @Input('index') i: number;

  @Output() currentIndex = new EventEmitter<number>()

  onRecipeItemClick() {
    this.currentIndex.emit(this.i);
  }
}
