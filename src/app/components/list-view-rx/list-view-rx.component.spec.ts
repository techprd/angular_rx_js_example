import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewRxComponent } from './list-view-rx.component';

describe('ListViewComponent', () => {
  let component: ListViewRxComponent;
  let fixture: ComponentFixture<ListViewRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewRxComponent ]
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
