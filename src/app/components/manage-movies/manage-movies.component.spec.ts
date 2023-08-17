import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMoviesComponent } from './manage-movies.component';

describe('ManageMoviesComponent', () => {
  let component: ManageMoviesComponent;
  let fixture: ComponentFixture<ManageMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMoviesComponent]
    });
    fixture = TestBed.createComponent(ManageMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
