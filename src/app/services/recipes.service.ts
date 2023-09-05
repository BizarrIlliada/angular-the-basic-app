import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Ramen', 'Nice dish from Japan', 'https://rnr.com.ua/imagecache/large_webp/26696.webp'),
    new Recipe('Mochi', 'Nice desert from Japan', 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/12/Mochi-Ice-Cream-8-1024x1536.jpg'),
    new Recipe('Onigiri', 'Nice Japanese food', 'https://brokebankvegan.com/wp-content/uploads/2023/01/Onigiri-16.jpg'),
    new Recipe('Bento', 'Nice meal from Japan', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bento_box_from_a_grocery_store.jpg/1920px-Bento_box_from_a_grocery_store.jpg'),
  ];
  
  currentRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return [...this.recipes];
  }

  constructor() {};
}
