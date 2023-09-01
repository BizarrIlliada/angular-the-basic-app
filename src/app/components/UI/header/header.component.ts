import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output('selectedTab') selectedTab = new EventEmitter<string>()
  
  collapsed = true;

  onSelect(tabName) {
    this.selectedTab.emit(tabName)
  }
  
  goToShoppingList(tabName) {
    this.selectedTab.emit(tabName)
  }
}
