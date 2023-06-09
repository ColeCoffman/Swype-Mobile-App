import React, { useState, useRef} from "react";
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


import { getPersistantData } from "../context/Storage";
import { setPersistantData } from "../context/Storage";
//import BottomBar from "../components/BottomBar";
import Swipes from "../components/Swipes";

import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import SwipeableImage from "../components/SwipeableImage";

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

let imagePath = require("../assets/placeholder3.jpg");


export default function YourPostScreen({ navigation }) {
  //const [token, setToken] = useState("");
  const [image, setImage] = useState("https://www.wired.com/wp-content/uploads/2016/03/MIT-Web-Loading.jpg");
  const swipesRef = useRef(null);
  const onSwipeUp = (gestureState) => {
    setPersistantData("newComments", "1");
    navigation.navigate("mainScreenStack", { screen: "Comments" });
  };
  // Get Token and set state
  /*getPersistantData("token")
    .then((result) => {
      setToken(result);
    })
    .catch((err) => console.error(err));
*/
  getPersistantData("usersImage")
    .then((result) => {
      setImage(result);
    })
    .catch((err) => console.error(err));

  return (
    // Container View
    <GestureRecognizer
      onSwipeUp={(state) => onSwipeUp(state)}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <View style ={styles.swipes}>
        <Image source={{ uri: image}} style ={styles.photo}></Image>
            
        </View>
      </View>
  </GestureRecognizer>    
  );
}
//<SwipeableImage/>
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  photo: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',
    borderRadius: 20,
    backgroundColor: "#073C45",

  },
})
