import React from 'react';
import View  from 'react-native';

import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

export default function App() {

  return (
    <View>
      <UserProvider value='Bhavani'>
        <ComponentC />
      </UserProvider>
    </View>
  )
}


