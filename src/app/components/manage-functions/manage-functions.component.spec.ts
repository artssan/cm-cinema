import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFunctionsComponent } from './manage-functions.component';

describe('ManageFunctionsComponent', () => {
  let component: ManageFunctionsComponent;
  let fixture: ComponentFixture<ManageFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFunctionsComponent]
    });
    fixture = TestBed.createComponent(ManageFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
