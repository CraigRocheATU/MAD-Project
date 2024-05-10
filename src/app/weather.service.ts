import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// Define types for Position and PositionError
interface Position {
  coords: {
    latitude: number;
    longitude: number;
    // other properties as needed
  };
  timestamp: number;
}

interface PositionError {
  code: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const apiKey = "598b4bc0a36d463cbfc165524240805";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    // Make HTTP GET request to weather API
    return this.http.get(apiUrl).pipe(
      tap(data => {
        console.log('Weather API Response:', data);
      })
    );
  }

  getCurrentWeather(city: string) {
    const apiKey = "598b4bc0a36d463cbfc165524240805";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    // Make HTTP GET request to weather API
    return this.http.get(apiUrl).pipe(
      tap(data => {
        console.log('Weather API Response:', data);
      })
    );
  }

  getWeatherByCoords(latitude: number, longitude: number) {
    const apiKey = "598b4bc0a36d463cbfc165524240805";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;
    
    return this.http.get(apiUrl).pipe(
      tap(data => {
        console.log('Weather API Response:', data);
      })
    );
  }

  async getCurrentPosition() {
    return new Promise<Position>((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            resolve(position);
          },
          (error: PositionError) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  getWeatherByCity(city: string) {
    const apiKey = "598b4bc0a36d463cbfc165524240805";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    return this.http.get(apiUrl).pipe(
      tap(data => {
        console.log('Weather API Response:', data);
      })
    );
  }
}