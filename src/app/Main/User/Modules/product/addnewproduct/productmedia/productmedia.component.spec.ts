import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmediaComponent } from './productmedia.component';

describe('ProductmediaComponent', () => {
  let component: ProductmediaComponent;
  let fixture: ComponentFixture<ProductmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
