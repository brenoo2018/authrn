import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({}); // criando contexto

/**
 * criando provider que vai usar no app.js
 */
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * função que vai carregar os dados do usuário logado salvo no async storage
   */
  useEffect(() => {
    async function loadStorage() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      /**
       * envia automaticamente o token a cada requisição
       */
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorage();
  }, []);

  /**
   * função que vai fazer login e salvar os dados do usuário no async storage
   */
  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  /**
   * função que vai desfazer o login e apagar os dados do usuário no async storage
   */

  function SignOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  /**
   * Valores retornados que serão utilizados por todos que usarem o contexto
   */
  return (
    <AuthContext.Provider
      value={{signed: Boolean(user), user, loading, signIn, SignOut}}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * hook p/ ser utilizado no contexto
 */

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
// export default AuthContext;
