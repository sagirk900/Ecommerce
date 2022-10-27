import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentDiscountComponent } from './percent-discount.component';

describe('PercentDiscountComponent', () => {
  let component: PercentDiscountComponent;
  let fixture: ComponentFixture<PercentDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
