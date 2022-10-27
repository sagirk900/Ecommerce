import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGetFreeComponent } from './buy-get-free.component';

describe('BuyGetFreeComponent', () => {
  let component: BuyGetFreeComponent;
  let fixture: ComponentFixture<BuyGetFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGetFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGetFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
