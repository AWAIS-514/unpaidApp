import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screen/center';
import AppNavigation_2 from './Tab_navigation';
import PrivacyPolicy from '../screen/privacypolicy';
import About from '../screen/about';
import TermCondi from '../screen/TermCondition';
import Login from '../screen/login';
import MerchantLogin from '../screen/merchant/login';
import MerchanrtSignup from '../screen/merchant/Signup';
import Signup from '../screen/signup';
import OTP from '../screen/otp'
const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
   <Stack.Navigator
    
    screenOptions={{
      headerShown: false
    }}
   >   
          <Stack.Screen name="MainTab" component={AppNavigation_2} />
    <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MerchantSignup" component={MerchanrtSignup} />
      <Stack.Screen name="MerchantLogin" component={MerchantLogin} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Privacy" component={PrivacyPolicy} />
          <Stack.Screen name="TermCondi" component={TermCondi} />
               <Stack.Screen name="Login" component={Login} />

   </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
  





  export default AppNavigation;