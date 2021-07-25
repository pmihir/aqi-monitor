const CITY = ['Mumbai', 'Bengaluru', 'Delhi', 'Kolkata', 'Bhubaneswar', 'Chennai', 'Pune', 'Hyderabad',
  'Lucknow', 'Indore', 'Jaipur', 'Chandigarh'];
const INITIAL_DATA = new Array(CITY.length).fill(0);
const COLOR_DATA = new Array(CITY.length).fill('#00FF00');

const chartUtils = (data) => {
  data.forEach((item) => {
    const index = CITY.findIndex(city => city === item.city);
    INITIAL_DATA[index] = item.aqi.toFixed(2);
    COLOR_DATA[index] = getChartColor(item.aqi);
  });

  const chartData = {
    labels: CITY,
    datasets: [
      {
        label: 'AQI Monitoring',
        data: INITIAL_DATA,
        backgroundColor: COLOR_DATA,
        borderColor: COLOR_DATA,
        borderWidth: 1,
      },
    ],
  };
  return chartData;
}

const getChartColor = aqi => {
  switch (true) {
    case (aqi > 0 && aqi <= 50):
      return "#00FF00";
    case (aqi > 50 && aqi <= 100):
      return "#228B22";
    case (aqi > 100 && aqi <= 200):
      return "#ffff00";
    case (aqi > 200 && aqi <= 300):
      return "#ffa500";
    case (aqi > 300 && aqi <= 400):
      return "#FF6666";
    case (aqi > 400 && aqi <= 500):
      return "#804040";
    default:
      return "#00FF00";
  }
}

export default chartUtils;