import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output('currentRecipe') currentRecipe = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) {};

  setCurrentRecipe(index = 0) {
    this.recipesService.currentRecipe.emit(this.recipes[index]);
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
