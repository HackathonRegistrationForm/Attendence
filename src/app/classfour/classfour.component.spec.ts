import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassfourComponent } from './classfour.component';

describe('ClassfourComponent', () => {
  let component: ClassfourComponent;
  let fixture: ComponentFixture<ClassfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassfourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
