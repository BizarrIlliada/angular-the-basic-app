import { Component, Input } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() ingredients: Ingredient[];

  constructor(private recipesService: RecipesService) {};

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.ingredients);
  }
}
