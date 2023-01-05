import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassoneComponent } from './classone.component';

describe('ClassoneComponent', () => {
  let component: ClassoneComponent;
  let fixture: ComponentFixture<ClassoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
