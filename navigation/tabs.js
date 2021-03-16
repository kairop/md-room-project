import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/';
import {icons, COLORS} from '../constants';
import { PlayerScreen } from '../screens/';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );


            case 'Player':
              return (
                <Image
                  source={icons.play_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Player" component={PlayerScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
