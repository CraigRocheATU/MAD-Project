import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonLabel, IonIcon, IonCardContent, IonCardHeader, IonCard, IonInput } from '@ionic/angular/standalone';
import { WeatherService } from '../../../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curernt-weather',
  templateUrl: './weather-current.page.html',
  styleUrls: ['./weather-current.page.scss'],
  standalone: true,
  imports: [IonInput, IonCard, IonCardHeader, IonCardContent, IonIcon, IonLabel,
    IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, CommonModule]
})
// exports WeatherCurrentPage class and sets up functions used in weather-current page
export class WeatherCurrentPage implements OnInit {
  weatherData: any;
  city: string = 'Galway';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getCurrentLocationWeather() {
    Geolocation.getCurrentPosition().then((resp: any) => {
      const position: GeolocationPosition = resp;
      console.log('Current location:', position.coords.latitude, position.coords.longitude);
      this.getWeatherByCoords(position.coords.latitude, position.coords.longitude);
    }).catch((error: any) => {
      console.error('Error getting current location', error);
    });
  }

  getWeatherByCoords(latitude: number, longitude: number): void {
    this.weatherService.getWeatherByCoords(latitude, longitude).subscribe(
      (data: any) => {
        console.log('Received weather data:', data);
        this.weatherData = data;
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  getCurrentWeather(city: string): void {
    this.weatherService.getWeatherByCity(city).subscribe(
      (data: any) => {
        console.log('Received weather data:', data);
        this.weatherData = data;
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}

