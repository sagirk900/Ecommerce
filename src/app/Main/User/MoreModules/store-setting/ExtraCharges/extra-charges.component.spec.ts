import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraChargesComponent } from './extra-charges.component';

describe('ExtraChargesComponent', () => {
  let component: ExtraChargesComponent;
  let fixture: ComponentFixture<ExtraChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
