import React from 'react';
import { Image, View } from 'react-native';

export function Home() {
  return (
    <View>
      <header className='w-full h-8 bg-slate-100 flex flex-row items-center'>
      <Image   source={require('./icons/logo.jpg')} />
      </header>
    </View>
  );
}
