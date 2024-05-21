import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import { Background, Subtitle2, Title2 } from './Styles';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

function Graph() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: []
    }]
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://snek22.000webhostapp.com/ventas.php')
      .then(response => {
        const data = response.data;

        if (Array.isArray(data) && data.length > 0) {
          const labels = data.map(item => item.fecha);
          const totalData = data.map(item => parseFloat(item.total));

          setChartData({
            labels: labels,
            datasets: [{
              data: totalData
            }]
          });
        } else {
          throw new Error('Formato de datos inválido o datos vacíos');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={require('./Images/background.png')} style={Background}>
          {loading ? (
            <ActivityIndicator size="large" color="#FB8DC8" style={{ marginTop: '50%' }} />
          ) : error ? (
            <Text style={{ color: 'red', marginLeft: 10 }}>{error}</Text>
          ) : (
            <LineChart
              data={chartData}
              width={350}
              height={500}
              yAxisSuffix="$"
              chartConfig={{
                backgroundColor: 'black',
                backgroundGradientFrom: '#000',
                backgroundGradientTo: '#0000',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "5",
                  stroke: "#FB8DC8"
                },
                propsForBackgroundLines: {
                  stroke: "#B41C65" // Color de las líneas de fondo
                },
              }}
              bezier
              style={{
                marginVertical: '30%',
                marginLeft: '2%'
              }}
            />
          )}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default Graph;
