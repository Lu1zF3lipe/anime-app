import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View>
      <View className='w-full h-24 bg-zinc-900 flex flex-row items-center'>
        <StatusBar style="light" />
        <Text className='flex items-center mt-6 ml-6 text-[#26C02C] text-2xl font-bold-'>Otakuflix</Text>
      </View>
      <View className='w-full h-72 bg-[#26C02C]'/>
      <View className='flex w-full h-56 bg-zinc-800 items-center'>
        <View className='w-4/5 border-b-2 border-[#6217CA] mt-10'>
          <Text className='h-8 text-zinc-100 text-base'>mais assistidos</Text>
        </View>
      </View>
      <View className='flex w-full bg-zinc-800 items-center'>
        <View className='w-4/5 border-b-2 border-[#6217CA] mt-10'>
          <Text className='h-8 text-zinc-100 text-base'>lançamentos</Text>
        </View>
      </View>
      <View className='h-full bg-zinc-800 justify-center items-center'/>
    </View>
    
  );
}
