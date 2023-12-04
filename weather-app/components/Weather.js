// // Weather.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

  // const getWeather = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=4FXBnfy2QN9AOFbWuekFVCuOpUPljo5i`
  //     );
  //     console.log(JSON.stringify(response.data.timelines.minutely[0]));
  //     if (response.data.timelines.minutely[0]) {
  //       setWeatherData(response.data.timelines.minutely[0]);
  //     } else {
  //       setWeatherData(null);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //   }
  // };

//   return (
//     <View>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         placeholder="Enter city"
//         onChangeText={(text) => setCity(text)}
//         value={city}
//       />
//       <TouchableOpacity onPress={getWeather}>
//         <Text>Get Weather</Text>
//       </TouchableOpacity>

//       {weatherData && (
//         <View>
//           <Text>City: {city}</Text>
//           <Text>Temperature: {weatherData.values.temperature}°C</Text>
//           <Text>Weather: {weatherData.values.weatherCode}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Weather;

// Weather.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=4FXBnfy2QN9AOFbWuekFVCuOpUPljo5i`
      );
      console.log(JSON.stringify(response.data.timelines.minutely[0]));
      if (response.data.timelines.minutely[0]) {
        setWeatherData(response.data.timelines.minutely[0]);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
      <Card containerStyle={{ width: '80%' }}>
        <Input
          placeholder="Enter city"
          onChangeText={(text) => setCity(text)}
          value={city}
          leftIcon={{ type: 'font-awesome', name: 'location-arrow' }}
        />
        <Button title="Get Weather" onPress={getWeather} />

        {weatherData && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>City: {city}</Text>
            <Text style={{ fontSize: 16 }}>Temperature: {weatherData.values.temperature}°C</Text>
            <Text style={{ fontSize: 16 }}>Cloudbase: {weatherData.values.cloudBase}</Text>
            <Text style={{ fontSize: 16 }}>Windspeed: {weatherData.values.windSpeed}</Text>
            <Text style={{ fontSize: 16 }}>Weather code: {weatherData.values.weatherCode}</Text>
          </View>
        )}
      </Card>
    </View>
  );
};

export default Weather;
