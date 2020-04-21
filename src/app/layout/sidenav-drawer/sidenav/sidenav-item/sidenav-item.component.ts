import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input() title: String;
  @Input() link: String;
  @Input() category: Category;
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
  }
}
