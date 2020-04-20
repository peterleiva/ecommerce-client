import { Component, Input, EventEmitter, Output } from '@angular/core';

import Classifier from 'src/app/core/models/classifier.interface';
import { Department } from 'src/app/core/models/department.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() superdepartment: Classifier;
  @Input() departments: Classifier[];
  @Output() open = new EventEmitter<Classifier>();

  onOpen(department: Classifier) {
    if (department.subclassifier?.length > 0) {
      this.open.emit(department);
    }
  }
}
