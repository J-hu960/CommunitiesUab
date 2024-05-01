import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import mando from '../assets/mando.jpg';

const Community = () => {
  return (
    <View style={styles.comunidad}>
      <View style={styles.bienvenidoFrame}>
        <Text style={styles.bienvenidoNombreUsuario}>Bienvenido, nombreUsuario</Text>
        <Image source={mando} style={styles.ellipse4} />
      </View>
      <Icon name="stepbackward" style={styles.returnButtonFrame} />
      <Image source={mando} style={styles.rectangle14} />
      <View style={styles.botonesImagenes}>
        <Icon name="left" style={styles.frame} />
        <Icon name="right" style={styles.frame2} />
      </View>
      <View style={styles.descripcion}>
        <Text style={styles.comunidadDeFutbol7}>Comunidad de futbol 7</Text>
        <Text style={styles.bienvenidos}>¡Bienvenidos a nuestra comunidad de fútbol universitario, donde el deporte se convierte en pasión y la camaradería se fusiona con la competencia! En nuestra comunidad, celebramos la diversidad de habilidades y experiencias, uniendo a estudiantes de todas las facultades y niveles de destreza bajo el emocionante estandarte del fútbol.{'\n\n'}Ya sea que seas un aficionado casual que busca disfrutar del juego o un jugador experimentado en busca de desafíos, encontrarás un lugar aquí.</Text>
        <View style={styles.button}>
          <Button Text="Unirse" style={styles.unirse}></Button>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <Icon name="diff-added" style={styles.frame3} />
        <Icon name="home" style={styles.frame4} />
        <Icon name="user" style={styles.frame5} />
      </View>
    </View>
  );
};

const styles = {
  comunidad: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 852,
    position: 'relative',
    overflow: 'hidden',
  },
  bienvenidoFrame: {
    backgroundColor: '#669579',
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 407,
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
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 7,
    width: 43,
    height: 40,
  },
  rectangle14: {
    alignSelf: 'stretch',
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
