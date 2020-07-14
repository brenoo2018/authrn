/**
 * configurando as rotas
 */

//import React, {useContext} from 'react'; comentario adicionado após useAuth
import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

// import AuthContext from '../contexts/auth'; comentario adicionado após useAuth
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  // const {signed, loading} = useContext(AuthContext); comentario adicionado após useAuth

  const {signed, loading} = useAuth(); // recebendo os dados do contexto

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;
