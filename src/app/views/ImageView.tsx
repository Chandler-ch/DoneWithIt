import colors from "@/app/config/colors";
import { Image, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        iconColor={colors.white}
        style={styles.button1}
        icon="close"
        size={30}
      />
      <IconButton
        iconColor={colors.white}
        style={styles.button2}
        icon="trash-can-outline"
        size={30}
      />

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
    left: 20,
  },
  button2: {
    position: "absolute",
    marginTop: 20,
    right: 20,
  },
});
