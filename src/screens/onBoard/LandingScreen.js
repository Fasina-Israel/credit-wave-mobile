import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import LandingPage2 from './landingPage/LandingPage2';
import LandingPage3 from './landingPage/LandingPage3';
import LandingPage4 from './landingPage/LandingPage4';

const LandingPageScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const handleChange = idx => {
    setIndex(idx);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        onIndexChanged={handleChange}>
        <View style={styles.slide1}>
          <LandingPage2 />
        </View>
        <View style={styles.slide2}>
          <LandingPage3 />
        </View>
        <View style={styles.slide3}>
          <LandingPage4 />
        </View>
      </Swiper>
      <View>
        {index === 2 ? (
          <Button onPress={() => navigation.navigate('RegisterScreen')}>
            Register
          </Button>
        ) : (
          <>
            <TouchableOpacity>
              <Text>Skip</Text>
            </TouchableOpacity>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Next
            </Button>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 20,
    width: 20,
  },
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
});

export default LandingPageScreen;
