import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const LandingPage = () => {
  return (
    <View style={styles.splashScreenStyle}>
      <SafeAreaView>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/QwipLogo.png')}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 20,
    width: 20,
  },
  splashScreenStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default LandingPage;
