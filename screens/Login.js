import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Login({ navigation }) {
  return (
    <>
      {/* <View style={[styles2.container,{margin:10}]}>
           <View style={styles2.triangleCorner} > 
            <View style={styles2.TextInput}>
             <TextInput placeholder="User ID"></TextInput>
             <Icon name='person-outline' size={16}></Icon>
            </View>
            <View>
             <TextInput placeholder="Password"></TextInput> 
            </View>
           </View>
           </View>
           <LinearGradient 
           locations={[0.1,0.7]} 
           colors={['#95abcf','white']} 
           start={{x:0,y:0.75}}
           end={{x:1.2,y:1.1}}
           style={styles2.linearGradient}>
            <View pla style={styles2.container}>           
              <View placeholder="User ID" style={styles2.TextInput}></View>
           
              <View placeholder="Password" style={styles2.TextInput}></Viewt>
            </View>

          </LinearGradient> */}
      <View style={styles2.container}>
        <View style={styles2.child}></View>
      </View>
      <View style={styles2.placement}>
        <Image
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2020/05/Google-Photos-logo.jpg",
          }}
          style={[styles2.logo, { margin: 40 }]}
        ></Image>
        <Text style={[styles2.Text, { margin: 30 }]}>LOGIN</Text>
        <View style={styles2.inputView}>
          <TextInput
            placeholder="User ID"
            style={[styles2.TextInput, { margin: 5 }]}
          ></TextInput>
          <Icon name="person-circle-outline" size={20}></Icon>
        </View>
        <View style={styles2.inputView}>
          <TextInput
            placeholder="Password"
            style={[styles2.TextInput, { margin: 5 }]}
          ></TextInput>
          <Icon name="lock-closed" size={20}></Icon>
        </View>
        <TouchableOpacity
          style={styles2.roundButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles2.buttonText}> LOG IN</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles2 = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  Text: {
    fontSize: 35,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  child: {
    flex: 0.5,
    backgroundColor: "#95abcf",
    // justifyContent:'flex-start',
    // alignItems:'flex-start',
    transform: [
      // {translateX: Dimensions.get('window').width*1},
      // { translateY: - Dimensions.get('window').width * 1 },

      { scaleX: 11.5 },
      { scaleY: 1.35 },
      { rotateX: "0deg" },
      { rotateY: "230deg" },
      { skewY: "60deg" },
    ],
    justifyContent: "flex-start",
    position: "absolute",
  },
  screenSplit: {
    transform: [{ rotateY: "45deg" }, { rotateZ: "45deg" }],
    backgroundColor: "#61dafb",
  },
  // container:{
  // flex:0.6,
  //   justifyContent:'flex-start',
  //   alignItems:'center'
  // },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "flex-end",
  },
  logo: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    marginLeft: 115,
  },
  TextInput: {
    flex: 1,
    width: 420,
    backgroundColor: "white",
    paddingLeft: 15,
    bottom: 2,
  },
  placement: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    top: 100,
    margin: 50,
  },
  roundButton: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#13bfcf",
    borderRadius: 1000,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    height: 50,
    width: 180,
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 70,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputView: {
    width: 300,
    height: 45,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    bordercolor: "gray",
  },
});
export default Login;
