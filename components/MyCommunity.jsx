import React from 'react'
import { View, Text, Image,Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import mando from '../assets/mando.jpg';
import { Button } from 'react-native-web';
import axios from 'axios';
const MyCommunity = ({community,isAdmin}) => {
  const handleDeleteCommunity=async()=>{
    try {
      console.log(community.Pk_Communitie)
      const response = await axios.delete(`http://localhost:8020/api/v1/communities/${community.Pk_Communitie}`)
      console.log(response)
      
    } catch (error) {
      console.log(error)

      
    }
  }
  return (
     <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:40}}>
          <Image source={mando}  style={styles.ellipse4} />
          <Text>{community.title}</Text>

          {isAdmin ? (
             <View style={{display:'flex',flexDirection:'column',rowGap:5}}>
             <Pressable onPress={()=>handleDeleteCommunity()} style={{backgroundColor:'red',borderRadius:5,width:100,display:'flex',alignItems:'center'}}>
               <Text style={{color:'white',fontWeight:'bold',padding:3}}>Eliminar</Text>
             </Pressable>
             <Pressable style={{backgroundColor:'green',borderRadius:5,width:100,display:'flex',alignItems:'center'}}>
               <Text style={{color:'white',fontWeight:'bold',padding:3}}>Editar</Text>
             </Pressable>
 
           </View>
 

          ):(
            <View style={{display:'flex',flexDirection:'column',rowGap:5}}>
            <Pressable style={{backgroundColor:'red',borderRadius:5,width:100,display:'flex',alignItems:'center'}}>
              <Text style={{color:'white',fontWeight:'bold',padding:3}}>Abandonar</Text>
            </Pressable>

          </View>
          )}
      </View>  

         
  )
}

export default MyCommunity

const styles = {
    misComunidadesAutoLayout: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    returnButtonFrame: {
      postion:'fixed',
      top:0,
      left:2,
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
  
  