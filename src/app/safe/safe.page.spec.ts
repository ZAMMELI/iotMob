import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePage } from './safe.page';

describe('SafePage', () => {
  let component: SafePage;
  let fixture: ComponentFixture<SafePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
