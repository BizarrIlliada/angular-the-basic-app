import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // currentTab = 'recipes';
  currentTab = 'shoppingList';

  onTabChange(tabName: 'recipes' | 'shoppingList') {
    this.currentTab = tabName;
  }
}
