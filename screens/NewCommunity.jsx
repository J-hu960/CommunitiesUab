import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'; 
import mando from '../assets/mando.jpg';

export const NewCommunity = () => {
  return (
    <ScrollView style={styles.crearComunidadAutoLayout}>
      <View style={styles.bienvenidoFrame}>
        <Text style={styles.bienvenidoNombreUsuario}>Bienvenido, nombreUsuario</Text>
        <Image source={mando} style={styles.ellipse4} />
      </View>
      <Pressable>

      </Pressable>
      <View style={styles.boxComunidadFrame}>
        <Text style={styles.crearComunidad}>CREAR COMUNIDAD</Text>
        <Text style={styles.nombreDeLaComunidad}>Nombre de la Comunidad:</Text>
        <TextInput style={styles.nombreComunidadBox}></TextInput>
        <Text style={styles.indicaLaCategoriaDeLaComunidad}>Indica la categoria de la comunidad:</Text>
        <View style={styles.nombreComunidadBox2}>
          <Icon name="down" style={styles.deployButton} />
        </View>
        <Text style={styles.aAdeFotosDeTuComunidad}>Añade fotos de tu comunidad:</Text>
        <Icon name="clouduploado" style={styles.uploadButtonFrame} />
        <Text style={styles.linkUrlDeTuChatPrivadoDeLaComunidad}>Link/Url de tu chat privado de la comunidad:</Text>
        <TextInput style={styles.linkComunidadBox}></TextInput>
        <Text style={styles.descripcionDeTuComunidad}>Descripción de tu comunidad:</Text>
        <TextInput style={styles.descripcionComunidadBox}></TextInput>
        <View style={styles.frame33}>
          <View style={styles.group20}>
            <View style={styles.rectangle32}>
                <Text style={styles.crear}>Crear</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = {
  crearComunidadAutoLayout: {
    backgroundColor: '#cee4ca',
    borderWidth: 1,
    borderColor: '#000000',
    display:'flex',
    flexDirection:'column',
    height:'100%',
    flex:1,
    width:'100%',
  },
  bienvenidoFrame: {
    backgroundColor: '#669579',
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  bienvenidoNombreUsuario: {
    color: '#ffecec',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 211,
  },
  ellipse4: {
    width: 51,
    height: 44,
  },
  boxComunidadFrame: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'space-around',
    width: '100%',
    height:750,
    marginTop:20
  },
  returnButtonFrame: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  crearComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 22,
    fontWeight: '400',
    width: '100%',
    height: 27,
  },
  nombreDeLaComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
  },
  nombreComunidadBox: {
    backgroundColor: '#eeeded',
    borderRadius: 5,
    height: 27,
    width:'100%',
    padding:3
  },
  indicaLaCategoriaDeLaComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
  },
  nombreComunidadBox2: {
    backgroundColor: '#eeeded',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 27,
    width:'100%'
  },
  deployButton: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    width: 24,
    height: 23,
  },
  aAdeFotosDeTuComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
  },
  uploadButtonFrame: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 7,   
  },
  linkUrlDeTuChatPrivadoDeLaComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 310,
  },
  linkComunidadBox: {
    backgroundColor: '#eeeded',
    borderRadius: 5,
    height: 27,
    width:'100%'
  },
  descripcionDeTuComunidad: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',

  },
  descripcionComunidadBox: {
    backgroundColor: '#eeeded',
    borderRadius: 5,
    height: 120,
    width:'100%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  frame33: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 29,
    display:'flex'
  },
  group20: {
    width: '100%',
    height: 29,
  },
  rectangle32: {
    backgroundColor: '#579770',
    borderRadius: 20,
    width: '100%',
    height: 40,
    top: 10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  crear: {
    color: '#ffffff',
    textAlign: 'right',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    fontWeight: '700',

  },
};

export default NewCommunity;

