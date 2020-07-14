import 'react-native-gesture-handler'; // configuração react navigation

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/auth'; // provider do contexto p/ compartilhar estado
import Routes from './routes'; // configuração das rotas

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
