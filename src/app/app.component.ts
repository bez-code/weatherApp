import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './module/weather/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: WeatherService) { }

  weatherdata?: WeatherData;
  cityName: string = 'istanbul';

  ngOnInit(): void {
    this.getForecastData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getForecastData(this.cityName);
    this.cityName = '';
  }

  private getForecastData(cityName: string) {
    this.service.getforecastData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherdata = response;
          console.log(response)
        }

      })
  }
  title = 'weatherApp';
}
