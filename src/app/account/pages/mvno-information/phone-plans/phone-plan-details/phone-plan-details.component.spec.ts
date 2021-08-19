import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePlanDetailsComponent } from './phone-plan-details.component';

describe('PhonePlanDetailsComponent', () => {
  let component: PhonePlanDetailsComponent;
  let fixture: ComponentFixture<PhonePlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
