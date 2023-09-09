import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<Recipe> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
    return this.recipesService.getRecipe(route.params['recipe-name']);
  }

  constructor(
    private recipesService: RecipesService
  ) { }
}
