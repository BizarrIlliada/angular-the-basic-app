import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Ramen',
      'Nice dish from Japan',
      'https://rnr.com.ua/imagecache/large_webp/26696.webp',
      [
        new Ingredient('Noodles', 500),
        new Ingredient('Corn', 100),
        new Ingredient('Pork roll', 200),
        new Ingredient('Eggs', 2),
        new Ingredient('Narutomaki', 2),
        new Ingredient('Nori', 1),
      ],
    ),
    new Recipe(
      'Mochi',
      'Nice desert from Japan',
      'https://tastesbetterfromscratch.com/wp-content/uploads/2020/12/Mochi-Ice-Cream-8-1024x1536.jpg',
      [
        new Ingredient('Rice flour', 400),
        new Ingredient('Jam', 100),
      ],
    ),
    new Recipe(
      'Onigiri',
      'Nice Japanese food',
      'https://brokebankvegan.com/wp-content/uploads/2023/01/Onigiri-16.jpg',
      [
        new Ingredient('Rice', 400),
        new Ingredient('Chicken', 150),
        new Ingredient('Nori', 1),
      ],
    ),
    new Recipe(
      'Bento',
      'Nice meal from Japan',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bento_box_from_a_grocery_store.jpg/1920px-Bento_box_from_a_grocery_store.jpg',
      [],
    ),
  ];
  
  currentRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {};

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  };
}
