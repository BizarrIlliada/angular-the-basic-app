import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe = null;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {};

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data.recipe;
    })
  }
}
