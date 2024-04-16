import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import loginImg from '../../assets/loginImg.jpg'


const Register = () => {
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
          <View style={styles.inputContainer}>
            <TextInput style={styles.label}>Nombre de usuario</TextInput>
            <View style={styles.inputBox}></View>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <View style={styles.bottomText}>
            <Text style={styles.bottomText}>Ya tienes cuenta?</Text>
            <Text style={styles.loginLink}>Inicia sesión aquí</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  imageContainer: {
    marginBottom: -180,
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
    paddingVertical: 10,
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
    textAlign: 'left',
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
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    fontWeight: '700',
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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:2,
    marginTop:5
  },
  loginLink: {
    color: '#579770',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 12,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
};

export default Register;
