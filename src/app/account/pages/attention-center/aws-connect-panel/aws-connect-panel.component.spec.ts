import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConnectPanelComponent } from './aws-connect-panel.component';

describe('AwsConnectPanelComponent', () => {
  let component: AwsConnectPanelComponent;
  let fixture: ComponentFixture<AwsConnectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsConnectPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsConnectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
