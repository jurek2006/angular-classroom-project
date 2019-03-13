import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSigninComponent } from './course-signin.component';

describe('CourseSigninComponent', () => {
  let component: CourseSigninComponent;
  let fixture: ComponentFixture<CourseSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
