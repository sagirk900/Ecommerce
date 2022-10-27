import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedCartsComponent } from './abandoned-carts.component';

describe('AbandonedCartsComponent', () => {
  let component: AbandonedCartsComponent;
  let fixture: ComponentFixture<AbandonedCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonedCartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
