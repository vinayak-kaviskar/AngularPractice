import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDeepDiveComponent } from './data-binding-deep-dive.component';

describe('DataBindingDeepDiveComponent', () => {
  let component: DataBindingDeepDiveComponent;
  let fixture: ComponentFixture<DataBindingDeepDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingDeepDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
