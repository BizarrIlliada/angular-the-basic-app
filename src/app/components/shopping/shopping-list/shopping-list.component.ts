import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Potato', 2),
    new Ingredient('Carrot', 2),
    new Ingredient('Eggs', 10),
    new Ingredient('Chicken', 1),
    new Ingredient('Tomato', 3),
    new Ingredient('Noodles', 1),
    new Ingredient('Onion', 1),
    new Ingredient('Milk', 1),
    new Ingredient('Garlic', 1),
    new Ingredient('Broccoli', 1),
  ];
}
