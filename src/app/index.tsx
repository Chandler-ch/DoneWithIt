import { StyleSheet, View } from "react-native";
import AppButton from "./components/AppButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <AppButton
        title="LOGIN"
        onPress={() => {
          console.log("hello");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
