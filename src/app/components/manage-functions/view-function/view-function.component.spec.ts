import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFunctionComponent } from './view-function.component';

describe('ViewFunctionComponent', () => {
  let component: ViewFunctionComponent;
  let fixture: ComponentFixture<ViewFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFunctionComponent]
    });
    fixture = TestBed.createComponent(ViewFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
