import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAndSocialComponent } from './support-and-social.component';

describe('SupportAndSocialComponent', () => {
  let component: SupportAndSocialComponent;
  let fixture: ComponentFixture<SupportAndSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAndSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAndSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
