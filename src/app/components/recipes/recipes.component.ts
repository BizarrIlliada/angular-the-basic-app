import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent {
  currentRecipe: Recipe = null;

  constructor(private recipesService: RecipesService) {
    recipesService.currentRecipe.subscribe(recipe => {
      this.currentRecipe = recipe;
    })
  };
}
