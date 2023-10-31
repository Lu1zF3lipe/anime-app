import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View, Text } from 'react-native';
import { User, Search, LayoutGrid, Bookmark, Home } from 'lucide-react-native';

export function HomePage() {
  return (
    <View className='w-full h-full bg-zinc-800'>
      <StatusBar style="light" backgroundColor='black' />
      <View className='w-full bg-zinc-900 flex flex-row items-center justify-between px-4'>
        <Image className='w-[200px] h-[80px]' source={require("../icons/logo.jpg") }/>
      </View>
      <View className='w-full h-72 bg-[#26C02C]'/>
      <View className='flex w-full h-56 bg-zinc-800 items-center'>
        <View className='w-4/5 border-b-2 border-[#6217CA] mt-10'>
          <Text className='h-8 text-zinc-100 text-base'>mais assistidoss</Text>
        </View>
      </View>
      <View className='flex w-full bg-zinc-800 items-center'>
        <View className='w-4/5 border-b-2 border-[#6217CA] mt-10'>
          <Text className='h-8 text-zinc-100 text-base'>lançamentos</Text>
        </View>
      </View>
      <View className='bg-zinc-800 justify-center items-center'/>
    </View>
  );
}
