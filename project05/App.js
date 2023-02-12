import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View,Text} from 'react-native';
import { WebView } from 'react-native-webview';
//import HomeScreen from './component/HomeScreen';

const Tab = createBottomTabNavigator();

function WebViewScreen({ route }) {
  return (
    <WebView
      source={{ uri: route.params.uri }}
    />
  );
}

function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={WebViewScreen} initialParams={{ uri: 'https://codingding1.tistory.com/' }} />
        <Tab.Screen name="리엑트" component={WebViewScreen} initialParams={{ uri: 'https://codingding1.tistory.com/category/react%20native' }} />
        <Tab.Screen name="달력" component={WebViewScreen} initialParams={{ uri: 'https://codingding1.tistory.com/category/%EB%A9%94%EB%AA%A8%EC%9E%A5%EC%9C%BC%EB%A1%9C%20%EB%8B%AC%EB%A0%A5%EB%A7%8C%EB%93%A4%EA%B8%B0' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigationApp;