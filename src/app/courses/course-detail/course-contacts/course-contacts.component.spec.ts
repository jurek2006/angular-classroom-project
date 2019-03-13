import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContactsComponent } from './course-contacts.component';

describe('CourseContactsComponent', () => {
  let component: CourseContactsComponent;
  let fixture: ComponentFixture<CourseContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
