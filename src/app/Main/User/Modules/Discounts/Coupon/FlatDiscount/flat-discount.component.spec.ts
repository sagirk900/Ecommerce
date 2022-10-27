import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatDiscountComponent } from './flat-discount.component';

describe('FlatDiscountComponent', () => {
  let component: FlatDiscountComponent;
  let fixture: ComponentFixture<FlatDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
