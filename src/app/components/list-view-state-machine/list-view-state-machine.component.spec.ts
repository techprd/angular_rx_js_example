import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewStateMachineComponent } from './list-view-state-machine.component';

describe('ListViewStateMachineComponent', () => {
  let component: ListViewStateMachineComponent;
  let fixture: ComponentFixture<ListViewStateMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewStateMachineComponent ]
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
