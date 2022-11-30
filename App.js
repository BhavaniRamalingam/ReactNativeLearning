
import {ScrollView, StyleSheet, Text, View, Image,  } from 'react-native';
// import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomerDetails = (props) => {
  
  return (
    <View style={[styles.container,{margin:0,padding:15,justifyContent:'space-around',alignItems:'flex-start',flexDirection: 'row',backgroundColor:'white',}]}>
      <View style={{flex:0.25,alignItems:'center'}}>
        <Image source={{ uri: props.photo }} style={{ height: 50, width: 50 ,borderWidth: 1, borderRadius: 30, borderColor: 'lightgray'}}></Image>
      </View>
      <View style={{flex:0.5,alignItems:'center'}}>
        <Text style={{fontSize:15,color:'#7A797F'}}>{props.customerName}</Text>
        <Text style={{fontSize:11,color:'gray'}}>{props.company}</Text>
      </View>
      <View style={{flex:0.25,alignItems:'center'}}>
       <Icon name='star'>{props.rating}</Icon>
       <Text source={{uri:props.photo}} style={{color:'red',}}> View Profile</Text>
      </View>
      {/* <IconRating toggledClassName="fa fa-star" untoggledClassName="fa fa-star-o" halfClassName="fa fa-star-half-o" /> */}
      
  
    </View>
    
  );
};
export default function App() {
  return (
    <>
      <View style={[styles.container, {flex:0.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end', backgroundColor: '#ebf5f5' }]}>
        <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', flexDirection: 'row', }}>
          <Image source={{ uri: 'https://cdn.dribbble.com/users/3908688/screenshots/9175825/media/84971aa2c8b70e78e39058f84203476d.jpg?compress=1&resize=400x300' }} style={{ height: 35, width: 35, borderWidth: 1, borderRadius: 10, borderColor: 'black', }}></Image>
          <Text style={{ fontSize: 30, justifyContent: 'space-around'}}>CLIENT LIST</Text>
          <Icon name='search' size={28} color='#4a8782' style={{ backgroundColor: 'white', margin: 7, padding: 0, height: 30, width: 30, borderWidth: 1, borderRadius: 20, borderColor: '#aabfbf' }} />
        </View>
      </View>
        <ScrollView style={[styles.scrollView,{}]}>
        
          <CustomerDetails idnum='1' customerName='Anitha Juliet' company='Spritle-Software Developmnet Company' rating='4.7' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='2' customerName='Bharath Shetty' company='Cognizant-Software Developmnet Company' rating='4.2' photo="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" />
          <CustomerDetails idnum='3' customerName='Cathrine Priya' company='Infosys-Software Developmnet Company' rating='4.0' photo="https://www.shutterstock.com/shutterstock/photos/1333448399/display_1500/stock-photo-smiling-businesswoman-reading-a-phone-message-on-her-mobile-as-she-sits-working-at-a-laptop-at-an-1333448399.jpg" />
          <CustomerDetails idnum='4' customerName='Bhavani' company='Spritle-Software Developmnet Company' rating='3.7' photo="https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-600w-1712082700.jpg" />
          <CustomerDetails idnum='5' customerName='Arun kumar' company='Spritle-Software Developmnet Company' rating='3.7' photo="https://www.shutterstock.com/image-photo/serious-middleaged-man-folded-arms-600w-1016721946.jpg" />
          <CustomerDetails idnum='6' customerName='Chandra' company='Spritle-Software Developmnet Company' rating='4.0' photo="https://www.shutterstock.com/image-photo/portrait-man-on-white-wall-600w-1358515382.jpg" />
          <CustomerDetails idnum='7' customerName='Ramya' company='Spritle-Software Developmnet Company' rating='4.2' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='8' customerName='Mukesh' company='Spritle-Software Developmnet Company' rating='4.8' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='9' customerName='Karthi' company='Spritle-Software Developmnet Company' rating='5' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='10' customerName='Vinoth' company='Spritle-Software Developmnet Company' rating='2.2' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='11' customerName='Bala' company='Spritle-Software Developmnet Company' rating='43.7' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='12' customerName='Paranthaman' company='Spritle-Software Developmnet Company' rating='4.0' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
          <CustomerDetails idnum='13' customerName='Aarokya' company='Spritle-Software Developmnet Company' rating='3' photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000" />
        </ScrollView>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    margin: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    backgroundColor: '#ebf5f5',
    marginHorizontal: 12,
    height:450,
    marginBottom:100
  }

});
