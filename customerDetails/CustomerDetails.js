import { StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomerDetails=(props)=>{
    return(
        <View style={styles2.box}>
          <Image style={{height:20,width:20}}></Image>
          <Text >{props.name}</Text>
          <Icon name='star'></Icon>
        </View>
    );
  };
  const styles2=StyleSheet.create({
    box:{
        flex:1,
        // flexDirection:'row',
        justifyContent:'space-around',
        // flexDirection:'row',
    },
  });
  export default CustomerDetails();