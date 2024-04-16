import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import mando from '../assets/mando.jpg'
import Icon from 'react-native-vector-icons/AntDesign'; 
const HomeScreen = () => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.bienvenidoFrame}>
        <Text style={styles.bienvenidoNombreUsuario}>Bienvenido, nombreUsuario</Text>
        <Image source={mando} style={styles.ellipse4} />
      </View>
      <View style={styles.busquedaFrame}>
        <Text style={styles.conGanasDeExplorar}>Con ganas de explorar?</Text>
        <View style={styles.frame21}>
          <Text style={styles.buscarTitulo}>Buscar título</Text>
          <View style={styles.line4} />
        </View>
      </View>
      <View style={styles.categoriasFrame}>
        <Text style={styles.categorias}>Categorías</Text>
        <Icon name="bars" size={30} color="black" />
      </View>
      <ScrollView style={styles.comunidadesFrame}>
        <View style={styles.comunidadFrame}>
          <Text style={styles.futbol7}>Fútbol 7</Text>
          <Text style={styles.deportivo}>Deportivo</Text>
          <Image source={mando} style={styles.rectangle31} />
          <View style={styles.frame26}>
            <View style={styles.group20}>
              <Pressable style={styles.rectangle32}>
                 <Text  style={styles.saberMas} >Saber más</Text>
              </Pressable>
             
            </View>
            <View style={styles.frame39}>
              <Text style={styles.miembros}>700 miembros</Text>
              <Text style={styles.rating}>3.5/5</Text>
            </View>
          </View>
        </View>
        <View style={styles.comunidadFrame}>
          <Text style={styles.futbol7}>Fútbol 7</Text>
          <Text style={styles.deportivo}>Deportivo</Text>
          <Image source={mando} style={styles.rectangle31} />
          <View style={styles.frame26}>
            <View style={styles.group20}>
              <Pressable style={styles.rectangle32}>
                 <Text  style={styles.saberMas} >Saber más</Text>
              </Pressable>
             
            </View>
            <View style={styles.frame39}>
              <Text style={styles.miembros}>700 miembros</Text>
              <Text style={styles.rating}>3.5/5</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  bienvenidoFrame: {
    backgroundColor: '#669579',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  bienvenidoNombreUsuario: {
    color: '#ffecec',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 211,
  },
  ellipse4: {
    width: 51,
    height: 44,
  },
  busquedaFrame: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    height: 69,
  },
  conGanasDeExplorar: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  frame21: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buscarTitulo: {
    color: '#000000',
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 10,
    marginTop:12,
  },
  line4: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: 304,
  },
  categoriasFrame: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent:'start',
    display:'flex',
    flexDirection:'row',
    width:'100%',
    marginLeft:20,
    gap:10
  },
  categorias: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
   
  },
  frame22: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    gap: 10, 
    width: '100%',
    height: 100,
    marginTop:12,
  },
  comunidadesFrame: {
    paddingVertical: 10,
    flex:1,
    height: 'auto',
    width:'100%'
  },

  comunidadFrame: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
    width:'100%'
  },
  futbol7: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
  },
  deportivo: {
    color: '#b12626',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  rectangle31: {
    width: 325,
    height: 194,
    marginBottom: 10,
  },
  frame26: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 355,
    height: 93,
  },
  group20: {
    flexDirection: 'row',
    width: 227,
    height: 51,
  },
  rectangle32: {
    backgroundColor: '#579770',
    borderRadius: 20,
    width: 227,
    height: 51,
    position: 'absolute',
    marginLeft:'auto',
    marginRight:'auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  saberMas: {
    color: '#ffffff',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',

  },
  frame39: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miembros: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
  },
  rating: {
    color: '#0372a5',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
  },
 
};

export default HomeScreen;
