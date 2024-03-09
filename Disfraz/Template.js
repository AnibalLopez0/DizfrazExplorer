import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';


export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('./Images/background.png')}
          style={styles.Background}>
          <View>
            <Image
              source={require('./Images/BackButton.png')}
              style={styles.BackButton}
            />
            <Text style={styles.Title}>PLANTILLA</Text>
          </View>
          <View style={styles.Test}>
            <ScrollView>
                <Text style={[styles.Subtitle, { marginLeft: 30 }]}>Subtitle</Text>
                <Text style={[styles.Subtitle2, { marginLeft: 30 }]}>Subtitle2</Text>
                <Text style={[styles.Buttons,{marginLeft:30, backgroundColor: '#B41C65', width:60}]}>Buttons</Text>
                <Text style={[styles.ButtonsLogin,{marginLeft:30}]}>ButtonsLogin</Text>
                <Text style={[styles.Data,{marginLeft:30}]}>Data</Text>
            </ScrollView>
          </View>
          <View style={[styles.HeaderButton]}>
            <Image source={require('./Images/home.png')}
            style={styles.ImageHeader}
            ></Image>
            <Image source={require('./Images/graph.png')}
            style={[styles.ImageHeader]}
            ></Image>
            <Image
            source={require('./Images/Pink User.png')}
            style={styles.ImageHeader}
            ></Image>
            <Image
            source={require('./Images/Pink lens.png')}
            style={styles.ImageHeader}
            ></Image>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Background: {
    height: 800,
    width: 800,
  },
  Title: {
    fontSize: 36,
    color: '#F72798', 
    fontWeight: '800',
    marginTop: -50,
    marginLeft: 110,//este debe de quedar centrado
  },
  BackButton: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginLeft: 20,
  },
  Test:{
    borderWidth: 1,
    borderColor: 'red',
    height: 610,
    width: 390,
    marginTop: 30,
  },
  //este es para otras pruebas Luego lo copias y lo pegas con otro nombre cuando lo tengas listo
  Test2:{
    borderWidth: 1,
    borderColor: 'red',
    height: 30,
    width: 30,
    //marginTop: 30,
    //marginLeft:30,
  },
  HeaderButton:{
    borderWidth: 1,
    borderColor: 'yellow',
    height: 100,
    width: 390,
    backgroundColor: '#B41C65',
    flexDirection: 'row',
  },
  Buttons:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  ButtonsLogin:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  Subtitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  Subtitle2:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  Data:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  ImageHeader:{
    width:70,
    height: 70, 
    marginLeft:20,
    marginTop: 15,
  }


});
