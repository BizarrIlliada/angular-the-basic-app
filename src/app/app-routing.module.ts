import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { RecipeResolver } from "./components/recipes/recipe-resolver.service";
import { InfoCardComponent } from "./components/UI/info-card/info-card.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: ':recipe-name',
        component: RecipeDetailsComponent,
        resolve: { recipe: RecipeResolver }
      },
      {
        path: '',
        component: InfoCardComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: '**', redirectTo: 'recipes',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}