import { Image, ImageBackground, StyleSheet, View } from "react-native";

function Start() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("@/assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("@/assets/logo-red.png")} />
      <View style={styles.button1}></View>
      <View style={styles.button2}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    position: "absolute",
    marginTop: 75,
    width: 100,
    height: 100,
  },
  button1: {
    width: "100%",
    height: 75,
    backgroundColor: "#fc5c65",
  },
  button2: {
    width: "100%",
    backgroundColor: "#4ecdc4",
    height: 75,
  },
});

export default Start;
