
//energy.page.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnergyPage } from './energy.page';

describe('EnergyPage', () => {
  let component: EnergyPage;
  let fixture: ComponentFixture<EnergyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
