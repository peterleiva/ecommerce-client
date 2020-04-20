import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Department } from 'src/app/core/models/department.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input() title: String;
  @Input() link: String;
  @Input() department: Department;
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
  }
}
