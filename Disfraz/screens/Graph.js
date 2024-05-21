import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { Background } from './Styles';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;

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

  useEffect(() => {
    console.log('Chart Data:', chartData);
  }, [chartData]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('./Images/background.png')} style={Background}>
        {loading ? (
          <ActivityIndicator size="large" color="#FB8DC8" style={{ marginTop: '50%' }} />
        ) : error ? (
          <Text style={{ color: 'red', marginLeft: 10 }}>{error}</Text>
        ) : (
          <ScrollView horizontal>
            <View style={{ padding: 20, marginTop: '15%' }}>
              <LineChart
                data={chartData}
                width={screenWidth * 2}  // Duplicamos el ancho de la pantalla para hacer el scroll
                height={500}
                yAxisSuffix="$"
                chartConfig={{
                  backgroundColor: 'black',
                  backgroundGradientFrom: '#000',
                  backgroundGradientTo: '#000',
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
              />
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Graph;
