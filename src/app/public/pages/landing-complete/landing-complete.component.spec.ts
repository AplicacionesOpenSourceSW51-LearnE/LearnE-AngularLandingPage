import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCompleteComponent } from './landing-complete.component';

describe('LandingCompleteComponent', () => {
  let component: LandingCompleteComponent;
  let fixture: ComponentFixture<LandingCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCompleteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
