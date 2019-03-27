import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSigninPickContactComponent } from './course-signin-pick-contact.component';

describe('CourseSigninPickContactComponent', () => {
  let component: CourseSigninPickContactComponent;
  let fixture: ComponentFixture<CourseSigninPickContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSigninPickContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSigninPickContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
