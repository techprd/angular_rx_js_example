import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewComponent} from './list-view.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewComponent],
      imports: [A11yModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
