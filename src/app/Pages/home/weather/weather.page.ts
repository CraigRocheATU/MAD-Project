import { Component} from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonLabel, IonIcon, IonCardContent, IonCardHeader, IonCard, IonInput } from '@ionic/angular/standalone';
import { WeatherService } from '../../../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonInput, IonCard, IonCardHeader, IonCardContent, IonIcon, IonLabel,
    IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, CommonModule]
})
// exports WeatherPage class and sets up funtions used in weather page
export class WeatherPage {
  weatherData: any;
  city: string = 'Galway';

  constructor(private weatherService: WeatherService) { }

  getWeather(city: string): void {
    console.log('Fetching weather for city:', city);

    this.weatherService.getWeather(this.city).subscribe(data => {
      console.log('Received weather data:', data)
      this.weatherData = data;
    },
    error => {
      console.error('Error fetching weather data', error);
    }
  );
  }

}
