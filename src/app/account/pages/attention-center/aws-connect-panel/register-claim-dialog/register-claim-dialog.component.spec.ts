import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClaimDialogComponent } from './register-claim-dialog.component';

describe('RegisterClaimDialogComponent', () => {
  let component: RegisterClaimDialogComponent;
  let fixture: ComponentFixture<RegisterClaimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClaimDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClaimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
