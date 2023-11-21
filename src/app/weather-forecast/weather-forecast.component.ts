import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent implements OnInit {
  apiKey: string = 'abf7d7dd952bdf0c78479f9c6c5bdeb6';

  ngOnInit() {
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const latitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;
  
          // let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`
          let url: string = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=abf7d7dd952bdf0c78479f9c6c5bdeb6';
          fetch(url)
            .then(response => response.json())
            .then((data: any) => {
              console.log('Weather data:', data);
              // Process and display the weather data
            })
            .catch((error: Error) => console.error('Error fetching weather data:', error));
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting location: ', error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
}
