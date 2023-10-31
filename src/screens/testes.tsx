import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function TestesPage() {

  const [lastActive, setlastActive] = useState("UNKNOW");

  useEffect(() => {
    AsyncStorage.getItem("lastActive", (_err, val) => setlastActive(val || "UNKNOW"))
  }, []);

  return (
    <View className='w-full h-full bg-zinc-800 justify-center items-center'>
      <StatusBar style="light" backgroundColor='black' />
      <Text className='text-zinc-100 '>ULTIMA VEZ QUE VOCÊ ENTRO: {lastActive}</Text>
    </View>
  );
}
