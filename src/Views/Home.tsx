import colors from "@/config/colors";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button1}></View>
      <View style={styles.button2}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("@/assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button1: {
    position: "absolute",
    marginTop: 20,
    left: 30,
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
  },
  button2: {
    position: "absolute",
    marginTop: 20,
    right: 30,
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
  },
});
