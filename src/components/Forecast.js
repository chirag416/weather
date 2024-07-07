import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Forecast = ({ forecast }) => {
  const forecastData = forecast.forecast.forecastday;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${day} ${month}`;
  };

  const formattedDates = forecastData.map(day => formatDate(day.date));

  const data = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Average Temperature (°C)',
        data: forecastData.map(day => day.day.avgtemp_c),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue'
      },
      {
        label: 'Min Temperature (°C)',
        data: forecastData.map(day => day.day.mintemp_c),
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green'
      },
      {
        label: 'Max Temperature (°C)',
        data: forecastData.map(day => day.day.maxtemp_c),
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label;
          },
          label: (tooltipItem) => {
            const day = forecastData[tooltipItem.dataIndex];
            return [
              `Avg Temp: ${day.day.avgtemp_c}°C`,
              `Min Temp: ${day.day.mintemp_c}°C`,
              `Max Temp: ${day.day.maxtemp_c}°C`,
              `Condition: ${day.day.condition.text}`
            ];
          }
        }
      }
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">7-Day Forecast</Typography>
        <div style={{ width: '100%', height: '400px' }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Forecast;
