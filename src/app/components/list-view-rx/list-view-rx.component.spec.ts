import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewRxComponent} from './list-view-rx.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ListViewComponent', () => {
  let component: ListViewRxComponent;
  let fixture: ComponentFixture<ListViewRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewRxComponent],
      imports: [A11yModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
