import React from 'react';
import { View, ImageBackground, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/backgroundLogin.png')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/logoLogin.png')} style={styles.logo} />
        <TextInput
          style={[styles.inputEmail, styles.marginInput]}
          placeholder="Email"
        />
        <TextInput
          style={[styles.inputSenha, styles.marginInput]}
          placeholder="Senha"
        />
        <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
        </TouchableOpacity>
        <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}>
                    <Text style={styles.buttonCadastro}>
                    Ainda não tem uma conta? Cadastre-se!
                    </Text>
        </TouchableOpacity>
 
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 210,
    marginBottom: 20,
  },
  inputEmail: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#F4F4F4',
    placeholderTextColor:"#B6C88F"
  },
  inputSenha: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#F4F4F4',
    placeholderTextColor:"#B6C88F"
  },
  marginInput: {
    marginBottom: 20,
  },
  entrar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonCadastro: {
    color: 'white',
  },
 
});

export default App;
