import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import mando from '../assets/mando.jpg';
import { Button } from 'react-native-web';

const MyCommunities = () => {
  return (
    <View style={styles.misComunidadesAutoLayout}>
      <View style={styles.bienvenidoFrame}>
        <Text style={styles.bienvenidoNombreUsuario}>Bienvenido, nombreUsuario</Text>
        <Image source={mando}  style={styles.ellipse4} />
      </View>
      <View style={styles.frame44}>
        <Icon name="stepbackward" style={styles.returnButtonFrame} />
        <View style={styles.frame51}>
          <Text style={styles.administraTusComunidades}>Administra tus comunidades:</Text>
        </View>
        <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Eliminar" style={styles.eliminar}></Button>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangle412}></View>
              <Button Text="Editar"  style={styles.editar}></Button>
            </View>
          </View>
        </View>
        <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Eliminar" style={styles.eliminar}></Button>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangle412}></View>
              <Button Text="Editar"  style={styles.editar}></Button>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Eliminar" style={styles.eliminar}></Button>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangle412}></View>
              <Button Text="Editar"  style={styles.editar}></Button>
            </View>
          </View>
        </View>
        <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Eliminar" style={styles.eliminar}></Button>
            </View>
            <View style={styles.group22}>
              <View style={styles.rectangle412}></View>
              <Button Text="Editar"  style={styles.editar}></Button>
            </View>
          </View>
        </View>
        <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Abandonar" style={styles.eliminar}></Button>
            </View>
          </View>
        </View>
        <View style={styles.frame45}>
          <Image source={mando} style={styles.rectangle11} />
          <Text style={styles.comunidadDeVideojuegos}>Comunidad de videojuegos</Text>
          <View style={styles.frame46}>
            <View style={styles.group21}>
              <View style={styles.rectangle41}></View>
              <Button Text="Abandonar" style={styles.eliminar}></Button>
            </View>
          </View>
        </View>
      <View style={styles.bottomBar}>
        <Icon name="diff-added" style={styles.frame} />
        <Icon name="home" style={styles.frame2} />
        <Icon name="user" style={styles.frame3} />
      </View>
    </View>
  );
};

const styles = {
  misComunidadesAutoLayout: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
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
  frame44: {
    backgroundColor: '#ffffff',
    paddingVertical: 19,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 396,
    height: 720,
  },
  frame51: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  administraTusComunidades: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    fontWeight: '500',
    width: 378,
  },
  frame45: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle11: {
    width: 61,
    height: 42,
  },
  comunidadDeVideojuegos: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 143,
  },
  frame46: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group21: {
    width: 132,
    height: 29,
  },
  rectangle41: {
    backgroundColor: '#ff0505',
    borderRadius: 10,
    width: 132,
    height: 29,
  },
  eliminar: {
    color: '#ffffff',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 71,
    height: 17,
  },
  group22: {
    width: 132,
    height: 29,
  },
  rectangle412: {
    backgroundColor: '#579770',
    borderRadius: 10,
    width: 132,
    height: 29,
  },
  editar: {
    color: '#ffffff',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    fontWeight: '400',
    width: 51,
    height: 17,
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
  frame: {
    padding: 3,
    width: 37,
    height: 31,
  },
  frame2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frame3: {
    padding: 3,
    width: 39,
    height: 38,
  },
};

export default MyCommunities;
