import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import mando from '../assets/mando.jpg';

const Profile = () => {
  return (
    <View style={styles.configuracionUsuario}>
      <Icon name="stepbackward" style={styles.returnButtonFrame} />
      <View style={styles.frame37}>
        <View style={styles.avatar}>
          <Image source={mando} style={styles.avatar2} />
          <Text style={styles.editarFotoDePerfil}>Editar foto de perfil</Text>
        </View>
        <View style={styles.frame38}>
          <View style={styles.input}>
            <Text style={styles.cambiarNombreDeUsuario}>Cambiar nombre de usuario</Text>
            <Input style={styles.rectangle15}/>
          </View>
          <View style={styles.input}>
            <Text style={styles.cambiarContrasena}>Cambiar contraseña</Text>
            <Input style={styles.rectangle15}/>
          </View>
          <View style={styles.unirteButton}>
          <Input style={styles.rectangle15}/>
            <Text style={styles.guardarCambios}>Guardar cambios</Text>
          </View>
          <View style={styles.eliminarBoton}>
            <View style={styles.rectangle22}></View>
            <Text style={styles.eliminarCuenta}>Eliminar Cuenta</Text>
          </View>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 852,
    position: 'relative',
    overflow: 'hidden',
  },
  returnButtonFrame: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 7,
    width: 60,
    height: 50,
  },
  frame37: {
    paddingVertical: 31,
    paddingHorizontal: 123,
    alignItems: 'center',
    justifyContent: 'center',
    width: 402,
    height: 766,
  },
  avatar: {
    width: 146,
    height: 137,
  },
  avatar2: {
    width: 125,
    height: 108,
    position: 'absolute',
    left: 138.5,
    top: 154.5,
  },
  editarFotoDePerfil: {
    color: '#3c664c',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    position: 'absolute',
    left: 128,
    top: 272.5,
  },
  frame38: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 310,
  },
  input: {
    width: 328,
    height: 57,
  },
  cambiarNombreDeUsuario: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    position: 'absolute',
    left: 11,
    top: 10,
    width: 225,
    height: 24,
  },
  rectangle21: {
    width: 328,
    height: 33,
    position: 'absolute',
    left: 10,
    top: 34,
  },
  cambiarContrasena: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    position: 'absolute',
    left: 11,
    top: 97,
    width: 164,
    height: 24,
  },
  rectangle212: {
    width: 328,
    height: 33,
    position: 'absolute',
    left: 10,
    top: 121,
  },
  unirteButton: {
    width: 215.84,
    height: 36,
  },
  rectangle15: {
    width: 215.84,
    height: 36,
    position: 'absolute',
    left: 66.08,
    top: 184,
  },
  guardarCambios: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  eliminarBoton: {
    width: 234,
    height: 31,
  },
  rectangle22: {
    backgroundColor: '#ff0000',
    width: 234,
    height: 31,
    position: 'absolute',
    left: '50%',
    top: 250,
    marginLeft: -117,
  },
  eliminarCuenta: {
    color: '#ffffff',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
};

export default Profile;
