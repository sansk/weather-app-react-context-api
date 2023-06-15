<h1 align="center">My Weather App - II</h1>

<div align="center">
  <h3>
   <a href="https://sk-weather-app-contextapi.netlify.app">
      Demo
    </a>
  </h3>
</div>

## Details

The project fetches the current weather data from [OpenWeather.org](openweathermap.org).
And displays all the details in `Metric` units by default.

We can also fetch data in `Imperial` units.

The unix time and timezone from the API is used to calculate the local time and date which is displayed along with the location details.

## Build With

- React JS
- TailwindCSS
- React Hooks - useState, useEffect and Context API
- Openweather.org's API

## Furthur Improvements

Instead of useEffect, this can be solved using,

- Pure Hooks - useState, useEffect and useRef. Refer another repository of mine [here](https://github.com/sansk/weather-channel-react/tree/main) & [Demo](https://sk-weather-app-react.netlify.app/)
- React Query

Also, for CSS, we can refactor using

- Styled Components
- Chakra UI

The options here are endless...
