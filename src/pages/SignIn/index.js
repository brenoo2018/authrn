// import React, {useContext} from 'react'; comentario adicionado após useAuth
import React from 'react';
import {View, Button} from 'react-native';

// import AuthContext from '../../contexts/auth'; comentario adicionado após useAuth
import {useAuth} from '../../contexts/auth';
import styles from './styles';

const SignIn = () => {
  //const {signed, signIn} = useContext(AuthContext); comentario adicionado após useAuth

  const {signed, signIn} = useAuth(); // recebendo dados do contexto

  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
