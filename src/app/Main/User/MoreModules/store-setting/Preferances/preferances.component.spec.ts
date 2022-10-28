import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferancesComponent } from './preferances.component';

describe('PreferancesComponent', () => {
  let component: PreferancesComponent;
  let fixture: ComponentFixture<PreferancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
