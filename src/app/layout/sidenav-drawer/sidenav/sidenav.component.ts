import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() categories: Category[];
  @Output() open = new EventEmitter<Category>();

  onOpen(category: Category) {
    if (category.subcategories?.length > 0) {
      this.open.emit(category);
    }
  }
}
