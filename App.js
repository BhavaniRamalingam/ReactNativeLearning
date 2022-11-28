import {StyleSheet, Text, Image,View ,TouchableHighlight,ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function App() {
  return (
    <>
    <SafeAreaView style={[styles.container,{justifyContent:'space-around',flexDirection:'row',}]}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',flexDirection:'row'}}>
        <Icon name='menu' size={30} color='black' style={{marginTop:30}} /> 
        <Text style={{marginTop:30,fontSize:20}}>All Books</Text>
        <Icon name='search' size={30} color='black' style={{marginTop:30}} />
      </View>
    </SafeAreaView >
    <SafeAreaView style={[styles.container,{justifyContent:'space-around',flexDirection:'row',backgroundColor:'#e7e7e7',borderWidth:1,borderColor:'#abaaa7',borderRadius:10}]}>
      <TouchableHighlight style={{flex:0.47,alignItems:'center',borderWidth:1,borderRadius:5,backgroundColor:'#ffffff'}} >
        <Text color='black' style={{flex:0.8,fontSize:20,marginTop:10}}>Ebook</Text>
      </TouchableHighlight>
      <View style={{flex:0.47,alignItems:'center',borderWidth:1,borderRadius:5,backgroundColor:'#ffffff'}}>
        <Text color='black' style={{flex:0.8,fontSize:20,marginTop:10}}>Audio Books</Text>
      </View>
    </SafeAreaView>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{ flex: 1, justifyContent: 'space-evenly', backgroundColor: '#F5FCFF',flexDirection:'row'}}>
        <View style={{flex:0.5, backgroundColor:"white",flexDirection:'column',margin:1}}>
           <Image source={{uri:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} style={{margin:10,flex:0.3,borderRadius:15,justifyContent:'space-between'}}></Image>
           <Image source={{uri:'https://plus.unsplash.com/premium_photo-1664475338439-ebd5886e3db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}} style={{margin:10,flex:0.4,borderRadius:15,}}></Image>
           <Image source={{uri:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} style={{margin:10,flex:0.3,borderRadius:15,}}></Image>
           
        </View>
        <View style={{flex:0.5, backgroundColor:"white",flexDirection:'column',margin:1}}>
          <Image source={{uri:'https://plus.unsplash.com/premium_photo-1661369709304-4cce5fc404f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}} style={{margin:10,flex:0.4,borderRadius:15,justifyContent:'space-between'}}></Image> 
          <Image source={{uri:'https://plus.unsplash.com/premium_photo-1664476653196-c3c5b01b1999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}} style={{margin:10,flex:0.3,borderRadius:15}}></Image>
          <Image source={{uri:'https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80'}} style={{margin:10,flex:0.3,borderRadius:15}}></Image>  
        </View> 
      </View>
    </ScrollView>
    <View style={[styles.container,{justifyContent:'space-around',flexDirection:'row',marginBottom:5}]}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',flexDirection:'row',marginBottom:5}}>
      <Icon name='home' size={25} color='black' style={{marginTop:5}} />
      <Icon name='md-bar-chart-sharp' size={25} color='black' style={{marginTop:5}} />
      <Icon name='mic-outline' size={25} color='black' style={{marginTop:5}} />
      <Icon name='bookmark-outline' size={25} color='black' style={{marginTop:5}} />
      {/* <Icon name='account' size={30} color='black' style={{marginTop:30}} /> */}
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    margin:10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  contentContainer:{
    paddingVertical:20,
    flex:1,backgroundColor:'#F5FCFF'
  },
  bookBox:{
    flex:0.25,
    borderWidth:1,
    alignItems:'flex-start',
    justifyContent:'space-around',
    flexDirection:'row'
  },
});
