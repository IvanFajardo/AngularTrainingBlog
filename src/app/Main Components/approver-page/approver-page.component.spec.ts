import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverPageComponent } from './approver-page.component';

describe('ApproverPageComponent', () => {
  let component: ApproverPageComponent;
  let fixture: ComponentFixture<ApproverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
