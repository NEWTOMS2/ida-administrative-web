import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePlanCreationComponent } from './phone-plan-creation.component';

describe('PhonePlanCreationComponent', () => {
  let component: PhonePlanCreationComponent;
  let fixture: ComponentFixture<PhonePlanCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePlanCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePlanCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
