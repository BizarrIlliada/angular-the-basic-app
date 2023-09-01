import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  currentRecipe: Recipe;

  setCurrentRecipe(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}
