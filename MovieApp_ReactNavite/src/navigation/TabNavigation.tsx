import {StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../theme/theme';
import CustomIcon from '../../android/app/src/components/CustomIcon';
import {MySvg} from '../assets/MySvg';
import {useEffect} from 'react';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: 100,
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: '#FF5524',
                        borderRadius: 46,
                        padding: 17,
                      }
                    : {}
                }>
                {MySvg.home()}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  focused
                    ? {
                        backgroundColor: '#FF5524',
                        borderRadius: 46,
                        padding: 17,
                      }
                    : {}
                }>
                {MySvg.searchTab()}
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
export default TabNavigator;
