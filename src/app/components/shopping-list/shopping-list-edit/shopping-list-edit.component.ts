import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {};

  createIngredient() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, +this.amountInput.nativeElement.value);

    this.shoppingListService.addIngredient(ingredient)
    this.clearForm();
  }

  clearForm() {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }

  deleteList() {
    this.shoppingListService.deleteList();
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientsChanged.subscribe();
  }
}
