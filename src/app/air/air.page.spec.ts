import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirPage } from './air.page';

describe('AirPage', () => {
  let component: AirPage;
  let fixture: ComponentFixture<AirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
