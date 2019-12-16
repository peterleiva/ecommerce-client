import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-entries-info',
  templateUrl: './page-entries-info.component.html'
})
export class PageEntriesInfoComponent implements OnInit {
  @Input() model: any;
  pageInfo;

  ngOnInit() {
    this.pageInfo = this.model;
  }

  get initialEntry() {
    return (this.pageInfo.number - 1) * this.pageInfo.size + 1;
  }

  get finalEntry() {
    return this.initialEntry + this.pageInfo.entries - 1;
  }
}
