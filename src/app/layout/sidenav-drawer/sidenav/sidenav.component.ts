import { Component, OnInit, Input } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Category } from 'src/app/core/models/category.model';
import { Department } from 'src/app/core/models/department.model';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() superdepartment: Department | Category;
  @Input() departments: Department[];
  backButton = faChevronLeft;

  constructor() { }

  ngOnInit() {
  }
}
