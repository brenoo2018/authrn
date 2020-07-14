//import React, {useContext} from 'react'; comentario adicionado após useAuth
import React from 'react';
import {View, Button, Text} from 'react-native';

//import AuthContext from '../../contexts/auth'; comentario adicionado após useAuth
import {useAuth} from '../../contexts/auth';
import styles from './styles';

const Dashboard = () => {
  const {SignOut, user} = useAuth(); // recebendo dados do contexto

  //console.log(signed);

  function handleSignOut() {
    SignOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
