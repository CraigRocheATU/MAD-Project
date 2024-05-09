import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(city: string)
  {
    const apiKey = "598b4bc0a36d463cbfc165524240805";
    const apiUrl = "http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no";
    return this.http.get(apiUrl);
  }
}
