import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasstwoComponent } from './classtwo.component';

describe('ClasstwoComponent', () => {
  let component: ClasstwoComponent;
  let fixture: ComponentFixture<ClasstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasstwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
