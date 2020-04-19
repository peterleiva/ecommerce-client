import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/core/models/department.model';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() superdepartment: Department | Category;
  @Input() departments: Department[];

  constructor() { }

  ngOnInit() {
  }
}
