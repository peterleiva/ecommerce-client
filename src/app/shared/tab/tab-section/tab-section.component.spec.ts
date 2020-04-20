import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSectionDirective } from './tab-section.component';

describe('TabSectionDirective', () => {
  let component: TabSectionDirective;
  let fixture: ComponentFixture<TabSectionDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSectionDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSectionDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
