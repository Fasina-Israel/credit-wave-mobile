import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./SignInScreen";
import SignUp from "./SignUpScreen";
// import {IconObject} from './IconObject';
// import LandingPage2 from 'pages/landingPage/LandingPage2';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Sign In", headerShown: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default Index;
