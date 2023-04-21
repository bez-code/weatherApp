import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherData } from '../module/weather/weather.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://api.weatherapi.com/v1'
  apikey = "4724d3e275d4442a956191121231804";



  getWeatherData(cityName: string): Observable<WeatherData> {
    const data = `${this.baseUrl}/current.json?key=${this.apikey}`
    return this.http.get<WeatherData>(data, {
      params: new HttpParams()
        .set('q', cityName)
    })
  }

  getforecastData(cityName: string): Observable<WeatherData> {
    const data = `${this.baseUrl}/forecast.json?key=${this.apikey}&days=1`
    return this.http.get<WeatherData>(data, {
      params: new HttpParams()
        .set('q', cityName)
    })
  }



}

