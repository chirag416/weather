# Weather Dashboard

This is a React-based weather dashboard application that allows users to search for and view weather information for different cities. Users can log in, add cities to their favorites, and view current weather and a 7-day forecast. The application uses Material-UI for styling and Axios for API requests.
### Components

- **SearchBar.js**: Allows users to search for cities and view suggestions.
- **CurrentWeather.js**: Displays current weather information for the selected city.
- **Forecast.js**: Shows a 7-day weather forecast for the selected city.
- **Login.js**: Manages user login.
- **LogoutButton.js**: Button for logging out the user.
- **TemperatureChart.js**: Displays temperature data in a chart format.

### Services

- **weatherService.js**: Contains functions to fetch weather data from the WeatherAPI.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/chirag416/weather.git
    cd weather
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up your environment variables**:
    - Create a `.env` file in the root of the project.
    - Add your WeatherAPI key:
        ```env
        REACT_APP_WEATHER_API_KEY= "your api key"
        ```

### Running the Application

1. **Start the development server**:
    ```bash
    npm start
    ```
    This will start the application on `http://localhost:3000`.

## Features

- **User Authentication**: Users can log in and log out. Authentication state is persisted using `localStorage`.
- **Search for Cities**: Users can search for cities and view weather suggestions.
- **View Weather Information**: Users can view current weather and a 7-day forecast for selected cities.
- **Favorites**: Users can add cities to their favorites and quickly access weather information for those cities.

## Usage

1. **Log in**: Use the login form to log into the application.
2. **Search for a city**: Use the search bar to find a city.
3. **View weather information**: Click on a city to view its current weather and 7-day forecast.
4. **Add to favorites**: Click the "Add to Favorites" button to save the city to your favorites.
5. **Remove from favorites**: Click the "Remove from Favorites" button to remove the city from your favorites.
6. **Log out**: Use the logout button to log out of the application.

## Notes

- Ensure that all API requests are made over HTTPS to avoid mixed content issues.
