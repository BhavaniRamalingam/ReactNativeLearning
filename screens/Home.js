import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, Image, FlatList ,ActivityIndicator} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Dataurl='https://random-data-api.com/api/users/random_user?size=30';

// const CustomerDetails = (props) => {
    

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           margin: 0,
//           padding: 40,
//           justifyContent: "space-around",
//           alignItems: "flex-start",
//           flexDirection: "row",
//           backgroundColor: "white",
//         },
//       ]}
//     >
//       <View style={{ flex: 0.25, alignItems: "flex-start" }}>
//         <Image
//           source={{ uri: props.avatar }}
//           style={{
//             height: 50,
//             width: 50,
//             borderWidth: 1,
//             borderRadius: 30,
//             borderColor: "lightgray",
//           }}
//         ></Image>
//       </View>
//       <View style={{ flex: 0.5, alignItems: "center" }}>
//         <Text style={{ fontSize: 15, color: "#7A797F" }}>
//           {props.customerName}
//         </Text>
//         <Text style={{ fontSize: 11, color: "gray" }}>{props.company}</Text>
//       </View>
//       <View
//         style={{ flex: 0.25, alignItems: "flex-end", flexDirection: "column" }}
//       >
//         <View style={[styles.Icon, { flexDirection: "row" }]}>
//           <Icon name="star" style={styles.Icon}></Icon>
//           <Icon name="star" style={styles.Icon}></Icon>
//           <Icon name="star" style={styles.Icon}></Icon>
//           <Icon name="star" style={styles.Icon}></Icon>
//           <Icon name="star-outline"></Icon>
//         </View>
//         <View>
//           <Text source={{ uri: props.photo }} style={{ color: "red" }}>
//             {" "}
//             View Profile
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };
export default function Home() {
   
//   const Data = [
//     {
//       idnum: "1",
//       customerName: "Anitha Juliet rosemary july",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000",
//     },
//     {
//       idnum: "2",
//       customerName: "Bannet Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://www.shutterstock.com/shutterstock/photos/1333448399/display_1500/stock-photo-smiling-businesswoman-reading-a-phone-message-on-her-mobile-as-she-sits-working-at-a-laptop-at-an-1333448399.jpg",
//     },
//     {
//       idnum: "2",
//       customerName: "Sacroinn Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://www.shutterstock.com/image-photo/serious-middleaged-man-folded-arms-600w-1016721946.jpg",
//     },
//     {
//       idnum: "2",
//       customerName: "annne  Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://www.shutterstock.com/image-photo/portrait-man-on-white-wall-600w-1358515382.jpg",
//     },
//     {
//       idnum: "2",
//       customerName: "Donnie Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
//     },
//     {
//       idnum: "2",
//       customerName: "mayor Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000",
//     },
//     {
//       idnum: "2",
//       customerName: "Yudith Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://www.shutterstock.com/image-photo/serious-middleaged-man-folded-arms-600w-1016721946.jpg",
//     },
//     {
//       idnum: "2",
//       customerName: "Sacroinn Juliet rosemaryjuly",
//       company: "Spritle-Software Developmnet",
//       rating: "4.7",
//       photo:
//         "https://www.shutterstock.com/image-photo/serious-middleaged-man-folded-arms-600w-1016721946.jpg",
//     },
//   ];
  const [isLoading,setLoading]=useState(true);
  const [title,settitle]=useState([]);
//   const [data,setData]=useState([]);
  const [first_name, setfirst_name] = useState([]);
  const [avatar, setavatar] = useState([]);
  useEffect(()=>{
    fetch(Dataurl)
    .then((response)=>response.json())
    .then((json)=>{
    // setData(json.username);
    settitle(json.title);
    setfirst_name(json.first_name);
    setavatar(json.avatar);
    })
    .catch((error)=>alert(error))
    .finally(()=>setLoading(false));
  },[]);
  async function getDataAsync(){
    try{
        let response=await fetch(Dataurl);
        let json=await response.json();
        settitle(json.title);
        setfirst_name(json.first_name);
        setavatar(json.avatar);
        setLoading(false);
    }catch(error){
        alert(error);
    }
  }
  return (
    
    <>
    
      <View
        style={[
          styles.container,
          {
            flex: 1.2,
            justifyContent: "flex-end",
            flexDirection: "row",
            alignItems: "flex-end",
            backgroundColor: "#ebf5f5",
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2020/05/Google-Photos-logo.jpg",
            }}
            style={styles.logo}
          ></Image>
          <Text style={styles.title}>CLIENT LIST</Text>
          <Icon name="search" size={25} color="#4a8782" style={styles.search} />
        </View>
      </View>
      {isLoading ? <ActivityIndicator /> :
      <FlatList
        data={title}
        keyExtractor={({id},first_name)=>id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.container,
              {
                margin: 0,
                padding: 35,
                justifyContent: "space-around",
                alignItems: "flex-start",
                flexDirection: "row",
                backgroundColor: "white",
              },
            ]}
          >
            <View style={{ flex: 0.15, alignItems: "flex-start" }}>
              <Image
                source={{ uri:item.avatar }}
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderRadius: 30,
                  borderColor: "lightgray",
                }}
              ></Image>
            </View>
            <View
              style={{
                flex: 0.6,
                margin: 0,
                padding: 0,
                alignItems: "flex-start",
              }}
            >
              <Text style={{ fontSize: 13, color: "#7A797F" }}>
                {item.first_name}
              </Text>
              <Text style={{ fontSize: 13, color: "gray" }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flex: 0.25,
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <View style={[styles.Icon, { flexDirection: "row" }]}>
                <Icon name="star" style={styles.Icon}></Icon>
                <Icon name="star" style={styles.Icon}></Icon>
                <Icon name="star" style={styles.Icon}></Icon>
                <Icon name="star" style={styles.Icon}></Icon>
                <Icon name="star-outline"></Icon>
              </View>
              <View>
                <Text
                  source={{ uri: item.avatar }}
                  style={{ flex: 1, color: "red", fontSize: 13, margin: 0 }}
                >
                  {" "}
                  View Profile
                </Text>
              </View>
            </View>
          </View>
          
        )}
        style={styles.FlatList}
      >
        {/* <CustomerDetails
          idnum="1"
          customerName="Anitha Juliet"
          company="Spritle-Software Developmnet Company"
          rating="4.7"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="2"
          customerName="Bharath Shetty"
          company="Cognizant-Software Developmnet Company"
          rating="4.2"
          photo="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
        />
        <CustomerDetails
          idnum="3"
          customerName="Cathrine Priya"
          company="Infosys-Software Developmnet Company"
          rating="4.0"
          photo="https://www.shutterstock.com/shutterstock/photos/1333448399/display_1500/stock-photo-smiling-businesswoman-reading-a-phone-message-on-her-mobile-as-she-sits-working-at-a-laptop-at-an-1333448399.jpg"
        />
        <CustomerDetails
          idnum="4"
          customerName="Bhavani"
          company="Spritle-Software Developmnet Company"
          rating="3.7"
          photo="https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-600w-1712082700.jpg"
        />
        <CustomerDetails
          idnum="5"
          customerName="Arun kumar"
          company="Spritle-Software Developmnet Company"
          rating="3.7"
          photo="https://www.shutterstock.com/image-photo/serious-middleaged-man-folded-arms-600w-1016721946.jpg"
        />
        <CustomerDetails
          idnum="6"
          customerName="Chandra"
          company="Spritle-Software Developmnet Company"
          rating="4.0"
          photo="https://www.shutterstock.com/image-photo/portrait-man-on-white-wall-600w-1358515382.jpg"
        />
        <CustomerDetails
          idnum="7"
          customerName="Ramya"
          company="Spritle-Software Developmnet Company"
          rating="4.2"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="8"
          customerName="Mukesh"
          company="Spritle-Software Developmnet Company"
          rating="4.8"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="9"
          customerName="Karthi"
          company="Spritle-Software Developmnet Company"
          rating="5"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="10"
          customerName="Vinoth"
          company="Spritle-Software Developmnet Company"
          rating="2.2"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="11"
          customerName="Bala"
          company="Spritle-Software Developmnet Company"
          rating="43.7"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="12"
          customerName="Paranthaman"
          company="Spritle-Software Developmnet Company"
          rating="4.0"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="13"
          customerName="Aarokya"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="14"
          customerName="Babu siva"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="15"
          customerName="Thenmozhi arul"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="16"
          customerName="hendry john"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="17"
          customerName="Ramar babu"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="18"
          customerName="pathma vathi"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="19"
          customerName="Aarokya"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="20"
          customerName="Aarokya"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="21"
          customerName="Aarokya"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />
        <CustomerDetails
          idnum="22"
          customerName="Aarokya"
          company="Spritle-Software Developmnet Company"
          rating="3"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=2000"
        />{" "} */}
        */
        <View style={styles.footer}></View>
      </FlatList>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    margin: 0,
    padding: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  FlatList: {
    backgroundColor: "#ebf5f5",
    marginHorizontal: 12,
    height: 450,
    marginBottom: 80,
    marginLeft: 0,
  },
  Icon: {
    color: "#ebba34",
  },
  footer: {
    borderColor: "#4a8782",
    borderWidth: 10,
    borderTopLeftRadius: 3,
  },
  logo: {
    height: 35,
    width: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    margin: 17,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 10,
  },
  search: {
    backgroundColor: "white",
    margin: 20,
    padding: 1,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "#aabfbf",
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  customerName: {
    fontSize: 32,
  },
  separator: {
    flex: 1,
  },
});
