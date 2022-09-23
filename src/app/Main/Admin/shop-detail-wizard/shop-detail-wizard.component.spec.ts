import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailWizardComponent } from './shop-detail-wizard.component';

describe('ShopDetailWizardComponent', () => {
  let component: ShopDetailWizardComponent;
  let fixture: ComponentFixture<ShopDetailWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
