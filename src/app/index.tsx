import { StyleSheet, View } from "react-native";
import RegisterView from "./views/forms/RegisterView";

export default function Index() {
  return (
    <View>
      <div style={styles.container}>
        <RegisterView />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 3,
  },
});
