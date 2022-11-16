// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Bhavani</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// import React from 'react';
// import { Text, View } from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         Try editing me! 🎉
//       </Text>
      
//     </View>
//   );
// }
// export default YourApp;

// export default YourApp;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React from "react";
// import { Text, View ,ScrollView,TextInput,Image} from "react-native";

// const myapp=()=>{
//   return(
//   <View style={{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   }}>
//     <Text>Hi Bhavani... Welcome to my App...!</Text>
//   </View>
//   );
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const scrlvw=()=>{
//   return(
//     <ScrollView>
//       <Text>Hello Bhavani!</Text>
//       <View>
//         <Text>You are looking for?</Text>
//         <Image
//         source={{
//           uri:'https://reactnative.dev/docs/assets/p_cat2.png',
//         }}
//         style={{ width:200,height:200}}
//         />
//       </View>
//       <TextInput
//       style={{
//         height:40,backgroundColor:'gray',borderColor:'black',borderWidth:1
//       }}
//       defaultValue='Enter Your Search'>
        
//       </TextInput>
//     </ScrollView>

//   );
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 
// import React from "react";
// import { Text } from "react-native";
// const getdetail=(firstname,middlename,lastname)=>{
//   return firstname+" "+middlename+" "+lastname;
// }
// const animal=()=>{
//   return(
//   <Text style={{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }}>This is {getdetail("Anzil","Lawrence","Robert")}</Text>
//   );
// }
//export default animal;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 import React from "react";
 import { View,Text,TextInput } from "react-native";  
 const See=()=>{
  return(
  <View>
    <Text style={{fontSize:30,color:'orange',margin:50,textAlign:'center'}}>How are you?</Text>
    <TextInput style={{
      margin:20,
      padding:10,
      height:40,
      color:'gray',
      borderWidth:2
      
    }}placeholder='Type Answer'></TextInput>
  </View>
  );
 }
const Person=(props)=>{
  return(
  <Text>This Person Name is{props.name}</Text>
  );
}
 const House=()=>{
  return(
    <View><Text>Welcome Home!</Text>
    <Person name='Bhavani' />
    <See />
    <See />
    <See />
    </View>
  );
 }
export default House;