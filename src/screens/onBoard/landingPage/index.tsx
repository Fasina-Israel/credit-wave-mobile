import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage2 from './LandingPage2';
import LandingPage3 from './LandingPage3';
import LandingPage4 from './LandingPage4';
import LandingPage5 from './LandingPage5';
import LandingPage6 from './LandingPage6';
import LandingPage7 from './LandingPage7';
import LandingPage8 from './LandingPage8';
import LandingPage9 from './LandingPage9';
import Login from '../../auth/SignInScreen';
import SignUp from '../../auth/SignUpScreen';
// import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Index = () => {
  // const state = useSelector(state => state.auth);
  // console.log(state);
 
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage2"
        component={LandingPage2}
        options={{title: 'Welcome2', headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage3"
        component={LandingPage3}
        options={{title: 'Welcome3', headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage4"
        component={LandingPage4}
        options={{title: 'Welcome4', headerShown: false}}
      />
        <Stack.Screen
        name="LandingPage5"
        component={LandingPage5}
        options={{title: 'Welcome4', headerShown: false}}
      />
        <Stack.Screen
        name="LandingPage6"
        component={LandingPage6}
        options={{title: 'Welcome4', headerShown: false}}
      />
        <Stack.Screen
        name="LandingPage7"
        component={LandingPage7}
        options={{title: 'Welcome4', headerShown: false}}
      />
        <Stack.Screen
        name="LandingPage8"
        component={LandingPage8}
        options={{title: 'Welcome4', headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage9"
        component={LandingPage9}
        options={{title: 'Welcome4', headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome4', headerShown: false}}
      />
       <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Welcome4', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Index;
