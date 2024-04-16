import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import loginImg from '../../assets/loginImg.jpg'
const Login = () => {
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
              <TextInput style={styles.inputTextInput}>...@gmail.com</TextInput>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputBox}>
              <TextInput style={styles.inputTextInput}>***************</TextInput>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <Text style={styles.bottomText}>Aun no tienes cuenta?</Text>
            <Text style={styles.registerLink}>Regístrate aquí</Text>
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
    paddingHorizontal: 20,
    height: 48,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  inputText: {
    color: '#a7a7a7',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    fontWeight: '500',
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
