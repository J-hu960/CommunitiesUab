import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import loginImg from '../../assets/loginImg.jpg'
import { PrivateRoutes, PublicRoutes } from '../../routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserContext from '../../hooks/useUserContext';

const Login = ({navigation}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {setAuthToken,loadUser} = useUserContext()

  const handleLogin=async()=>{
    try {
      console.log(email,password)

      const response = await axios.post('http://localhost:8020/api/v1/auth/signIn', {
             Email: email,
             Password: password  
});

      const token = await response.data

      await AsyncStorage.setItem('token',token)
      await setAuthToken()
      await loadUser(email)
      navigation.navigate(PrivateRoutes.MAIN)

    } catch (error) {
      console.log(error)
      
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={loginImg} style={styles.rectangle} />
      </View>
      <View style={styles.box}>
        <Text style={styles.bienvenido}>BIENVENIDO!</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputBox}>
              <TextInput onChangeText={text=>setEmail(text)} style={styles.inputTextInput}></TextInput>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputBox}>
              <TextInput onChangeText={text=>setPassword(text)}  style={styles.inputTextInput}></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <Pressable onPress={()=>handleLogin()} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </Pressable>
          <View style={styles.bottomText}>
            <Text style={styles.bottomText}>Aun no tienes cuenta?</Text>
           <Pressable onPress={() => navigation.navigate(PublicRoutes.SIGNUP)}
>
            <Text style={styles.registerLink}>Regístrate aquí</Text>
           </Pressable>
          </View>
        </View>
        <Text style={styles.forgotPassword}>He olvidado mi contraseña</Text>

      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  imageContainer: {
    marginBottom: -150,
  },
  rectangle: {
    width: 393,
    height: 250,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  box: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    height:400,
    marginTop:50
  },
  bienvenido: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  inputTextInput: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    fontWeight: '500',
    height:'100%',
    width:'100%',
    paddingHorizontal:20

  },
  bottom: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#579770',
    borderRadius: 20,
    width: 194,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    fontWeight: '700',
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize:12,
   
  },
  registerLink: {
    color: '#579770',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 12,
    fontWeight: '800',
    textDecorationLine: 'underline',
    marginLeft: 3,
  },
  forgotPassword: {
    color: '#e62e1b',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginTop: 3,
  },
};

export default Login;
