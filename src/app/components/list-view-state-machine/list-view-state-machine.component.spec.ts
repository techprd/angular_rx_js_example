import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewStateMachineComponent} from './list-view-state-machine.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ListViewStateMachineComponent', () => {
  let component: ListViewStateMachineComponent;
  let fixture: ComponentFixture<ListViewStateMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewStateMachineComponent],
      imports: [A11yModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewStateMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
