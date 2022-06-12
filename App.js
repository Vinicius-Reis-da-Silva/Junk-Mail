import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Intro from './src/components/Intro';

export default function App() {
  return (
    <Intro />
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Intro />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// const slides = [
//   {
//       key: '1',
//       title: 'Junk Mail',
//       description: 'Esse App vai auxiliar você a fazer o descarte correto do seu lixo eletrônico.',
//       image: require('./src/assets/image/logo-reciclagem-eletronica.png')
//   },
//   {
//       key: '2',
//       title: 'Realidade Atual',
//       description: 'O Mundo está cada vez mais dominado pela tecnologia, é cada vez maior o número de aparelhos eletrônicos que são fabricados e consumidos pelas pessoas todos os dias. Uma das caracteristicas desses produtos é justamente a curta vida útil, sempre dando lugar a versões mais modernas.',
//       image: require('./src/assets/image/eletronicos-reaproventado-tutorial.png')
//   },
//   {
//       key: '3',
//       title: 'Matériais do E-Lixos',
//       description: 'Os aparelhos que ficam obsoletos se tornam o chamado lixo eletrônico, e esses produtos como pilhas e baterias possuem produtos químicos e metais pesados em sua composição, que poluem o solo, os lençóis freáticos e contaminam as verduras e legumes.',
//       image: require('./src/assets/image/lixeira-eletronica.png')
//   }
// ];

// function Intro() {

//   const [showLogin, setShowLogin] = useState(false);

//   function renderSlides({ item }){
//       return( 
//           <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red'}}>
//               <Image 
//                   source={ item.image } 
//                   style={{ 
//                       resizeMode: 'stretch',
//                       height: '70%',
//                       width: '70%',
//                   }} 
//               />
//               <Text>{ item.title }</Text>
//               <Text>{ item.description }</Text>
//           </View>
//       );
//   }

//   if(showLogin){
//       return(
//           <Text>Entrou no Login</Text>
//       );
//   }else{
//       return(
//           <AppIntroSlider 
//               renderItem={ renderSlides }
//               data={slides}
//               activeDotStyle={{
//                   backgroundColor: colors.lightPrimary,
//                   width: 20
//               }}
//           />
//       );
//   }

// }