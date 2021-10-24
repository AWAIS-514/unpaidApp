import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from '../screen/center';




const Tab = createMaterialBottomTabNavigator();

function AppNavigation_2(Props) {





    return (
   <Tab.Navigator
 initialRouteName="Home"
 activeColor="#f1f104"
 inactiveColor="#fff"
 barStyle={{ backgroundColor: '#222240'}}
   
   >

          <Tab.Screen name="Home1"  component={Home}
           options={{
            tabBarLabel: 'Home1',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={20}  />
            ),
          }}
          />




         
<Tab.Screen name="Home2"  component={Home}
           options={{
            tabBarLabel: 'Home2',
            tabBarIcon: ({ color }) => (
              <Icon name="chart-bar" color={color} size={20}  />
            ),
          }}
          />

                    
          <Tab.Screen name="Home"  component={Home}
           options={{
            tabBarLabel: 'Main',
            tabBarIcon: ({ color }) => (
              <Icon name="cut" color={color} size={20}  />
            ),
          }}
          />   

<Tab.Screen name="Home5"  component={Home}
           options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="th-large" color={color} size={20}  />
            ),
          }}
          />   


          <Tab.Screen name="Home3"  component={Home}
           options={{
            tabBarLabel: 'Home3',
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={20}  />
            ),
          }}
          />   


                    
   </Tab.Navigator>
  
        
      
    );
  }
  

  




  export default AppNavigation_2;