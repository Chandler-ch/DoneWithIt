import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/defaultStyles";

function Start() {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.image}
      source={require("@/assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={defaultStyles.logoSize}
          source={require("@/assets/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 25,
  },
});

export default Start;
