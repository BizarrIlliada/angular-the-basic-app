import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(
    // private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onClick() {
    // this.recipesService.currentRecipe.emit(this.recipe);
    this.router.navigate([this.recipe.name], { relativeTo: this.route})
  }
}
