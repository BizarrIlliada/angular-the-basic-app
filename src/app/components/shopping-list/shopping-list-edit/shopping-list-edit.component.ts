import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  @Output('newIngredient') newIngredient = new EventEmitter<Ingredient>();
  @Output('deleteIngredients') deleteIngredients = new EventEmitter<void>();

  createIngredient() {
    this.newIngredient.emit({
      name: this.nameInput.nativeElement.value,
      amount: +this.amountInput.nativeElement.value,
    })

    this.clearForm();
  }

  clearForm() {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }
}
