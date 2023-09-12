import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

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

    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients.concat(this.ingredients);

    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteList() {
    // this.ingredients.length = this.ingredients.length - 1;
    this.ingredients.length = 0;

    this.ingredientsChanged.next([...this.ingredients]);
  }

  constructor() { }
}
