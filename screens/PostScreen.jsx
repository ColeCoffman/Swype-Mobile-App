import React, { useState } from "react";
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
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import { getPersistantData } from "../context/Storage";
import { setPersistantData } from "../context/Storage";

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

export default function PostScreen({ navigation }) {
  const onSwipeUp = (gestureState) => {
    setPersistantData("newComments", "1");
    navigation.navigate("mainScreenStack", { screen: "Comments" });
  };

  const [token, setToken] = useState("");

  getPersistantData("token")
    .then((result) => {
      setToken(result);
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
      <View>
        <Text>Post Screen</Text>
        <Text>TOKEN: {token}</Text>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#00ff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#007",
  },
  loginText: {
    color: "white",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});
