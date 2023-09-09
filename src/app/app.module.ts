import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { MainComponent } from './components/UI/main/main.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ContainerComponent } from './components/UI/container/container.component';
import { RecipesComponent } from './components/recipes/recipes.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeResolver } from './components/recipes/recipe-resolver.service';
import { RecipesService } from './services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ContainerComponent,
    RecipesComponent,
    DropdownDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [RecipesService, RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
