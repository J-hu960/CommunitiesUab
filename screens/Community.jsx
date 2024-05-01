import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import mando from '../assets/mando.jpg';
import Icon from 'react-native-vector-icons/AntDesign'; 

 const Community = () => {
  return (
    <View style={styles.comunidad}>
      <View style={styles.bienvenidoFrame}>
        <Text style={styles.bienvenidoNombreUsuario}>Bienvenido, nombreUsuario</Text>
        <Image source={mando} style={styles.ellipse4} />
      </View>
      <Pressable> 
      <Icon name="back" size={30} color="black"  style={styles.returnButtonFrame} />      

      </Pressable>
      <View style={{display:'flex',width:'100%',height:'auto',alignItems:'center',justifyContent:'center'}}>
         <Image source={mando} style={styles.rectangle14} />
      </View>
      <View style={styles.botonesImagenes}>
        <Icon name="left" style={styles.frame} />
        <Icon name="right" style={styles.frame2} />
      </View>
      <View style={styles.descripcion}>
        <Text style={styles.comunidadDeFutbol7}>Comunidad de futbol 7</Text>
        <Text style={styles.bienvenidos}>¡Bienvenidos a nuestra comunidad de fútbol universitario, donde el deporte se convierte en pasión y la camaradería se fusiona con la competencia! En nuestra comunidad, celebramos la diversidad de habilidades y experiencias, uniendo a estudiantes de todas las facultades y niveles de destreza bajo el emocionante estandarte del fútbol.{'\n\n'}Ya sea que seas un aficionado casual que busca disfrutar del juego o un jugador experimentado en busca de desafíos, encontrarás un lugar aquí.</Text>
        <Pressable style={styles.button}>
          <Text style={styles.unirse}>Unirse</Text>
        </Pressable>
      </View>
     
    </View>
  );
};

const styles = {
  comunidad: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  returnButtonFrame: {
    position:'fixed',
    top:130,
    left:10,
    
  },
  rectangle14: {
    height: 230,
  },
  botonesImagenes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  frame: {
    width: 24,
    height: 24,
  },
  frame2: {
    width: 24,
    height: 24,
  },
  descripcion: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    height: 378,
  },
  comunidadDeFutbol7: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    fontWeight: '700',
  },
  bienvenidos: {
    color: '#000000',
    textAlign: 'justify',
    fontFamily: 'Inter-Light',
    fontSize: 18,
    fontWeight: '300',
    width: 350,
    height: 308,
  },
  button: {
    backgroundColor: '#669579',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 145,
  },
  unirse: {
    color: '#ffffff',
    textAlign: 'justify',
    fontFamily: 'Inter-Light',
    fontSize: 18,
    fontWeight: '300',
  },
  bottomBar: {
    backgroundColor: '#669579',
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 55,
  },
  frame3: {
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 37,
    height: 31,
  },
  frame4: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
  },
  frame5: {
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 39,
    height: 38,
  },
};

export default Community;
