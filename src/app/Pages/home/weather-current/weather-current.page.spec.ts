import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCurrentPage } from './weather-current.page';

describe('WeatherCurrentPage', () => {
  let component: WeatherCurrentPage;
  let fixture: ComponentFixture<WeatherCurrentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCurrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
