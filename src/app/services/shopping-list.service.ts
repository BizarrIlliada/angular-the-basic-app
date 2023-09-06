import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potato', 2),
    new Ingredient('Carrot', 2),
    new Ingredient('Eggs', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);

    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients.concat(this.ingredients);

    this.ingredientsChanged.emit([...this.ingredients]);
  }

  deleteList() {
    // this.ingredients.length = this.ingredients.length - 1;
    this.ingredients.length = 0;

    this.ingredientsChanged.emit([...this.ingredients]);
  }

  constructor() { }
}
