import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './module/weather/weather.module';
import { Forecast } from './module/forecast/forecast.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: WeatherService) { }

  weatherdata?: WeatherData;

  ngOnInit(): void {
    this.service.getWeatherData('london')
      .subscribe({
        next: (response) => {
          this.weatherdata = response;
        }
      }),

      this.service.getforecastData('london')
        .subscribe({
          next: (response) => {
            this.weatherdata = response;
            console.log(response)
          }

        })
  }
  title = 'weatherApp';
}
