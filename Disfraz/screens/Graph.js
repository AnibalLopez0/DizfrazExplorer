import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { Background, Subtitle2, Title2 } from './Styles';
import { LineChart } from 'react-native-chart-kit';

function Graph() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={require('./Images/background.png')} style={Background}>
          <LineChart
            data={{
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
              datasets: [{
                data: [20, 45, 28, 80, 99]
              }]
            }}
            width={350}
            height={200}
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 20,
              marginLeft: 10
            }}
          />
          <View>
            <Text style={[Title2, { marginLeft: 10 }]}>PRODUCTO</Text>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>VALOR DEL PRODUCTO</Text>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>INGRESOS EN DETERMINADO TIEMPO</Text>
            <Text style={[Subtitle2, { marginTop: 20, marginLeft: 10 }]}>GANANCIAS</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default Graph;
