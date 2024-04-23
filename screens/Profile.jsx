import React from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import mando from '../assets/mando.jpg';

const Profile = () => {
  return (
    <View style={styles.configuracionUsuario}>
      <Icon name="stepbackward" style={[styles.returnButtonFrame,{fontSize:25}]} />
      <View style={styles.frame37}>
        <View style={styles.avatar}>
          <Image source={mando} style={styles.avatar2} />
          <Text style={styles.editarFotoDePerfil}>Editar foto de perfil</Text>
        </View>
        <View style={styles.frame38}>
          <View style={styles.input}>
            <Text style={styles.cambiarNombreDeUsuario}>Cambiar nombre de usuario</Text>
            <TextInput style={styles.rectangle15}/>
          </View>
          <View style={styles.input}>
            <Text style={styles.cambiarContrasena}>Cambiar contraseña</Text>
            <TextInput style={styles.rectangle15}/>
          </View>
          <Pressable style={styles.unirteButton}>
            <Text style={styles.guardarCambios}>Guardar cambios</Text>
          </Pressable>
          <Pressable style={styles.eliminarBoton}>
            <Text style={styles.eliminarCuenta}>Eliminar Cuenta</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = {
  configuracionUsuario: {
    backgroundColor: '#d8d8d8',
    borderWidth: 1,
    borderColor: '#000000',
    padding: 20,
    height: '100%',
    width:'100%',
    display:'flex',
    flexDirection:'column'
  
  },
  returnButtonFrame: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 7,
    width: 60,
    height: 50,
  },
  frame37: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    display:'flex',
    flexDirection:'column'

  },
  avatar: {
    display:'flex',
    flexDirection:'column',
    width: '100%',
    alignItems:'center'
   
  },
  avatar2: {
    width: 125,
    height: 108,
   
  },
  editarFotoDePerfil: {
    color: '#3c664c',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginTop:10
    
  },
  frame38: {
    padding: 10,
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    width:'100%',
    marginTop:20
  },
  input: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    width: '100%',
    
  },
  cambiarNombreDeUsuario: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  rectangle21: {
    width: '100%',
    height: 33,

  },
  cambiarContrasena: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 16, 
    width: 164,
    height: 24,
    marginTop:20
  },
  rectangle212: {
    width: 328,
    height: 33,
  
  },
  unirteButton: {
    width: '70%',
    backgroundColor:'#417857',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    height: 36,
    marginTop:12
  },
  rectangle15: {
    width: '100%',
    height: 36,
    backgroundColor:'white',
    borderRadius:10,
  },
  guardarCambios: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
   
  },
  eliminarBoton: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: 234,
    height: 31,
    marginTop:30,
    backgroundColor:'#FF0000'
  },
 
  eliminarCuenta: {
    color: '#ffffff',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
   
  },
};

export default Profile;
