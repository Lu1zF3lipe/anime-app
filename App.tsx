import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from "./src/Router";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();

type TabInfo = {
  name: string;
  component: any,
  options?: {
    tabBarIcon?: (params: any) => any
  }
}

type TabRootParamList = {
  [key: string]: TabInfo
}

export default function App() {
  useEffect(() =>{
    AsyncStorage.setItem('lastActive', new Date().toISOString())
  }, []);

  return (
    <View
      className={`w-full h-full flex justify-center`}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderColor: "rgb(24, 24, 27)",
            backgroundColor: "rgb(24, 24, 27)"
          },
          tabBarInactiveTintColor: "rgb(244, 244, 245)",
          tabBarActiveTintColor: "rgb(98, 23, 202)",
        }}>
          {Object.values(Tabs).map(tab => <Tab.Screen key={tab.name} {...tab}/>)}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
